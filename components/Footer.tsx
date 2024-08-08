import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="footer flex w-full items-center justify-center bg-custom-blue">
      <div className="footer-content flex w-full items-center justify-center">
        <div className="footer-content-left text-center">
          <p className="text-md mb-5 md:text-xl">
            <strong>© 2024 Property Revive</strong> All Rights Reserved
          </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}
