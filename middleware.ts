import { withAuth } from "next-auth/middleware"
import { i18nRouter } from "next-i18n-router"
import { NextResponse } from "next/server"
import i18nConfig from "./i18nConfig"

export default withAuth(
  async function middleware(request) {
    const i18nResult = i18nRouter(request, i18nConfig)
    if (i18nResult) return i18nResult

    // Your existing middleware logic here
    // ...

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

export const config = {
  matcher: ["/chat/:path*"]
}