In a given folder or url segment, you can either have a page.tsx file or a route.tsx file but not both.

If you want to show something to the user or render a markup or a html content, you use a page.tsx file, but if you want to handle http requests, you use a route.tsx file

### About Authentication

makes sure to spell the file middleware.ts properly because it is one of the files that next.js looks out for protecting routes, the exported functions config and middleware should also be spelt as they are as next.js also looks out for them regarding protecting routes.

For google authentication by default our session strategy is jwt(json web token) but when we use an adapter, next-auth changes the session strategy to database, at the time of this writing, we cannot use database sessions with social logins or OAuth(open authentication) providers
hence we set the property strategy to "jwt",

once the user logs in with "gmail" for instance, the user is created and stored in the user table with the details gotten from google, and their details is also saved in the accounts table also

### Using prisna

the link we used to poppulate the table for the whole authentication flow is https://authjs.dev/reference/adapter/prisma which contains the Account, User, Session and VerificationToken table
we also added the hashedPassword attribut and made it optional for the users that will be logging in with their credentials (email and password).

### Using react-email

we added to the .gitignore file that we don't want to track any file that is under the .react-email/ folder because when we run the "preview-email" script command we added to the package.json file, it will generate thousands of files under that folder to help preview the email.

### Using Images

the <Image /> component from "next/image" package is built on stop of the standard image element in html but under the hood it automatically compresses and resizes our images based on the device size. So in nextjs applications we should always use this component as opposed to using the basic image html element.
To serve remote images, you have to add some configurations to the next.config.js file in the remotePatterns attribute that you can get from the docs here https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns

with remote images, we must provide thier dimensions because nextjs doesn't know their size ahead of time. For fixed sizes,we can declare their width and height but if we want our images responsive so they look great on all device sizes then instead of width and height, we use the property fill and in the style property set objectFit to whatever typed value we want.

For local images, nextjs automatically detects their size.

### Using metadata

It can be used in every page to optimise for SEO it uses the Metadata type from "next" first decalared in the root layout page and we can override it in every page, the name must be spelt accordingly. for to return dynamic data as metadata (i.e data from APIs) reference app/page.tsx function that returns a promise of Metadata

### lazy loading

#### for heavy Components

this is done by using the dynamic function from "next/dynamic" to import components dynamically that you want to be dynamically loaded in. (this should be used for only heavy components and could be counter-productive if we try to use it for light components)

#### for loading librairies

you can import it when the function is triggered and use it (check ProductCard.tsx on how lodash was used). with that implementation, lodash is not loaded with the page bundle ahead of time, it is loaded after the button is clicked and the function is triggered.

### Deployment

Before we deploy our applications, we should build it locally first to make sure we don't have any errors because if there are any errors when building locally, they'll show up during deployment.
