export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Mind Spirit Body Home" className="ml-2 flex items-center gap-3">
      <img 
        src="/logo.jpg" 
        alt="Mind Spirit Body Logo"
        className="h-10 w-10 object-contain" 
      />
      <span className="text-xl font-semibold text-foreground tracking-tight hidden sm:inline">
        Mind Spirit Body
      </span>
    </a>
  )
}