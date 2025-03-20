import { Metadata } from 'next';
import HomePage from './components/HomePage';

export const metadata: Metadata = {
  title: 'mukhliskadir | Software Developer',
  description: 'Professional portfolio for Mukhlis Kadir, Software Developer',
};

export default function Home() {
  return <HomePage />;
}