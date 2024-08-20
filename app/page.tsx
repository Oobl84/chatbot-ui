import { redirect } from 'next/navigation'

export default function ChatbotHome() {
  // Assuming you have a way to check if user is authenticated
  const isAuthenticated = checkAuthentication()
  
  if (!isAuthenticated) {
    redirect('/')  // Redirect to main landing page for login
  }
  
  // Your chatbot app logic here
}