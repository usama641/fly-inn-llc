import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials are used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email_or_displayname: {
          label: "Email or Username",
          type: "text",
          placeholder: "johndoe@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email_or_displayname, password } = credentials as {
          email_or_displayname: string;
          password: string;
        };
        const payload = {
          email_or_displayname: email_or_displayname,
          password: password,
        };
        console.log({ payload }, process.env.NEXT_PUBLIC_API_URI);
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/auth/login`,
            {
              method: "POST",
              body: JSON.stringify(payload),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const userData = await res.json();

          if (!res.ok) {
            if (userData?.error) {
              throw new Error(userData?.error);
            }
            throw new Error("Something went wrong");
          }
          console.log({ userData });
          return {
            ...userData.data?.user,
            access: userData?.data?.accessToken,
            refresh: userData?.data?.refreshToken,
          } as any;
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message ?? "Something went wrong");
          } else {
            throw new Error("Something went wrong");
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user, account, session, trigger }: any) {
      if (trigger === "update" && session?.firstName && session?.lastName) {
        const payload = {
          firstName: session.firstName,
          lastName: session?.lastName,
        };

        try {
          const axiosOptions = {
            method: "put", // Use lower case for HTTP methods in Axios
            url: `${process.env.NEXT_PUBLIC_API_URI}/users/${token.id}`,
            data: payload, // Use 'data' instead of 'body' for FormData in Axios
            headers: {
              Authorization: `Bearer ${token.access}`, // Add custom headers here
            },
          };

          const res = await axios(axiosOptions);

          if (res.status === 200) {
            token.firstName = session.firstName;
            token.lastName = session.lastName;
          } else {
            //console.error('Failed to update user');
          }
        } catch (error) {
          //console.error('Error updating user:', error);
        }
      }
      if (trigger === "update" && session.photo) {
        const payload = {
          photo: session.photo,
        };

        try {
          const axiosOptions = {
            method: "put", // Use lower case for HTTP methods in Axios
            url: `${process.env.NEXT_PUBLIC_API_URI}/users/${token.id}`,
            data: payload, // Use 'data' instead of 'body' for FormData in Axios
            headers: {
              Authorization: `Bearer ${token.access}`, // Add custom headers here
            },
          };

          const res = await axios(axiosOptions);

          if (res.status === 200) {
            token.photo = session.photo;
          } else {
            //console.error('Failed to update user');
          }
        } catch (error) {
          //console.error('Error updating user:', error);
        }
      }
      if (trigger === "update" && session.access && session.refresh) {
        token.access = session.access;
        token.refresh = session.refresh;
      }
      if (account && user) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },

    async session({ session, token }: any) {
      session.user = token;

      return session;
    },
  },
};
