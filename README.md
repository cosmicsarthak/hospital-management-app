# Hospital Management App

### Core Features:

- Dashboard
- Appointments
- Database connect
- Payments management
- sync with database
- auto API generate to connect to any Frontend
- dark & light themes

---

### Tech Stack

- NextJS 13
- Typescript
- Tailwind CSS
- Planetscale
- Clerk Authentication

---

### Package Install

```shell
npm install
```

### Setting up the `.env` file

```js
# clerk-api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

```
DATABASE_URL=
```

```
NEXT_PUBLIC_APP_URL="..."
```

### Setup Prisma

- use `Prisma` with any Platform you want.

### App start

```shell
npm run dev
```

---

[-- Sarthak Mohanty](https://sarthak.app)
