import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { signinInput, signupInput, createPostInput, updatePostInput } from "@bluewhaledelta/common-app"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: any
    }
}>()
blogRouter.use('/*', async (c, next) => {
    try {
        const jwt = c.req.header('Authorization');

        if (!jwt) {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }
        const token = jwt;
        console.log(token);
        const payload = await verify(token, c.env.JWT_SECRET);
        // const data = await decode(token)
        if (!payload) {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }
        // if (typeof data.payload.id == 'string') {
        c.set('userId', payload.id);
        // }
        await next()
    } catch (error) {
        console.log(error);
        return c.json({
            mes: error
        })
    }
})
blogRouter.post('/', async (c) => {
    try {
        const userId = c.get('userId');
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const body = await c.req.json();
        const { success } = createPostInput.safeParse(body);
        if (!success) {
            c.status(400);
            return c.json({ error: "invalid input" });
        }

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        return c.json({
            id: post.id
        });
    } catch (error) {
        console.log(error);
        return c.json({
            mes: error
        })
    }
})
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });
    // console.log(posts);
    return c.json(posts);
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.findFirst({
           where:{
            id:id
           },
           select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
           }
        })
        return c.json(blog)
    } catch (error) {
        return c.json({
            mes:"Failed to fetch"
        })
    }
})




blogRouter.put('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
})