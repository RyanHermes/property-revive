import Image from 'next/image';
import ImageComparison from '@/components/ImageComparison';
import SocialMedia from '@/components/SocialMedia';

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image src="/pr_name.svg" alt="logo" width={500} height={300} priority />
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="active" href="#home">Home</a>
      </div>

      <div className="hero-image">
        <div className="hero-text">
          <h1>Property Revive</h1>
          <p>Welcome to Property Revive, where we redefine exterior maintenance with comprehensive services that go beyond the ordinary. Specializing in expert window washing and thorough gutter cleaning, we also offer a range of additional exterior solutions to elevate the beauty and functionality of your property. From pressure washing to roof cleaning and beyond, our skilled team is dedicated to restoring and preserving the integrity of your exterior surfaces. With a commitment to excellence and attention to detail, Property Revive ensures that every aspect of your property receives the care it deserves. Trust us to revive your property&apos;s exterior, leaving it sparkling, refreshed, and rejuvenated.</p>
        </div>
      </div>

      <div className="intro">
        <Image src="/pr_logo.svg" alt="logo" width={500} height={300} />
        <div className="introRight">
          <h1>Website Coming Soon</h1>
          <p>Service Near You</p>
        </div>
      </div>

      <div className="results">
        <h1>Before and After</h1>
        <div className="comparison">
          <ImageComparison />
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Property Revive</p>
      </div>
    </main>
  );
}