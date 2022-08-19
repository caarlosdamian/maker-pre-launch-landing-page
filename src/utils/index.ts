import img1 from '../assets/illustration-passions.svg';
import img2 from '../assets/illustration-financial-freedom.svg';
import img3 from '../assets/illustration-lifestyle.svg';
import img4 from '../assets/illustration-work-anywhere.svg';
import img5 from '../assets/icon-free.svg';
import img6 from '../assets/icon-paid.svg';

export const infoCards = [
  {
    id: 'passions',
    title: 'Indulge your passions',
    img: img1,
    description:
      "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
  },
  {
    id: 'freedom',
    title: 'Gain financial freedom',
    img: img2,
    description:
      'Start making money work for you. There’s nothing quite like earning while you sleep.',
  },
  {
    id: 'lifestyle',
    title: 'Choose your lifestyle',
    img: img3,
    description:
      'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
  },
  {
    id: 'anywhere',
    title: 'Work from anywhere',
    img: img4,
    description:
      'Selling online means not being pinned down. Want to work AND travel? Go for it!',
  },
];

export const subcriptionItems = [
  {
    id: 'card1',
    color: 'primary',
    title: 'Dip your toe',
    img: img5,
    subtitle:
      'Just getting started? No problem at all! Our free plan will take you a long way.',
    price: 'Free',
    monthly: false,
    check: '#3EE9E5',
    features: [
      {
        name: 'Unlimited products',
      },
      {
        name: 'Basic analytics',
      },
      {
        name: 'Limited marketplace exposure',
      },
      {
        name: '10% fee per transaction',
      },
    ],
  },
  {
    id: 'card2',
    color: 'secondary',
    title: 'Dive right in',
    img: img6,
    subtitle:
      'Ready for the big time? Our paid plan will help you take your business to the next level.',
    price: '$25.00',
    monthly: true,
    check: '#093F68',
    features: [
      {
        name: 'Custom domain',
      },
      {
        name: 'Advanced analytics and reports',
      },
      {
        name: 'High marketplace visibility',
      },
      {
        name: '5% fee per transaction',
      },
    ],
  },
];
