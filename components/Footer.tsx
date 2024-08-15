import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="m-0 flex w-full items-center justify-center bg-custom-blue p-0">
      <div className="footer-content-left m-0 p-0 text-center">
        <p className="text-md m-5 mb-5 p-0 md:text-xl">
          <strong>© 2024 Property Revive</strong> All Rights Reserved
        </p>
        <SocialMedia />
      </div>
    </footer>
  )
}
