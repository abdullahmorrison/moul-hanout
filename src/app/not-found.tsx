import Button from '@/components/Button'
 
export default function NotFound() {
  return (
    <div className="bg-primary text-white min-h-screen flex items-center justify-center p-6">
      <div className="text-center flex flex-col items-center justify-center gap-6">
        <h2 className="mb-4 text-6xl font-bold">404 - Page Not Found</h2>
        <p className="mb-6 text-xl"> Sorry, the page you are looking for does not exist.</p>
        <Button path="/" btnText="Go Back Home" />
     </div>
    </div>
  )
}
