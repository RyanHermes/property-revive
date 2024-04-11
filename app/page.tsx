import Image from 'next/image';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

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
          <p>Property Revive is a property management company that helps you manage your property.</p>
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
      <ImgComparisonSlider>
        <Image slot='first' src="/before.png" alt="logo" width={1000} height={1000} />
        <Image slot='second' src="/after.png" alt="logo" width={1000} height={1000} />
      </ImgComparisonSlider>
      </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Property Revive</p>
      </div>
    </main>
  );
}