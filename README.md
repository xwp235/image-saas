This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Installation the project.

![初始化项目](1714958469705.jpg)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

根据drizzle定义的schema创建或修改数据库表结构

```bash
npx drizzle-kit push:pg
```

运行drizzle数据库可视化界面

```bash
npx drizzle-kit studio
```

用户名密码方式登录url

[http://localhost:3000/api/auth/signin](http://localhost:3000/api/auth/signin)

Github OAuth2对接

Open [https://zhuanlan.zhihu.com/p/644330358](https://zhuanlan.zhihu.com/p/644330358) with your browser to see the
result.

Gitlab OAuth2对接

![第一步](1715344906068.jpg)
![第二部](1715345275974.jpg)

在编辑详情中，要根据本地启动项目时用的访问地址是localhost还是127.0.0.1来配置，否则会重定向失败

# Intercepting Routes & Parallel Routes

Intercepting Routes

在当前页面下打开其他页面的路由时不会跳离当前上下文


