import DeviceCard from '@/components/DeviceCard';
import Grid from '@/components/Grid';
import Section from '@/layouts/Section';

const Devices = () => {
  const deviceItems = [
    {
      title: 'Smartphones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi magnam. Modi eveniet ut, quas laudantium repellendus doloremque tenetur, veniam odio tempore sapiente ipsam accusamus. Officia provident blanditiis nihil illum!',
      imgSrc: '/devices/1.svg',
    },
    {
      title: 'Tablet',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi magnam. Modi eveniet ut, quas laudantium repellendus doloremque tenetur, veniam odio tempore sapiente ipsam accusamus. Officia provident blanditiis nihil illum!',
      imgSrc: '/devices/2.svg',
    },
    {
      title: 'Smart TV',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi magnam. Modi eveniet ut, quas laudantium repellendus doloremque tenetur, veniam odio tempore sapiente ipsam accusamus. Officia provident blanditiis nihil illum!',
      imgSrc: '/devices/3.svg',
    },
    {
      title: 'Laptops',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi magnam. Modi eveniet ut, quas laudantium repellendus doloremque tenetur, veniam odio tempore sapiente ipsam accusamus. Officia provident blanditiis nihil illum!',
      imgSrc: '/devices/4.svg',
    },
    {
      title: 'Gaming Consoles',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi magnam. Modi eveniet ut, quas laudantium repellendus doloremque tenetur, veniam odio tempore sapiente ipsam accusamus. Officia provident blanditiis nihil illum!',
      imgSrc: '/devices/5.svg',
    },
    {
      title: 'Smartphones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi magnam. Modi eveniet ut, quas laudantium repellendus doloremque tenetur, veniam odio tempore sapiente ipsam accusamus. Officia provident blanditiis nihil illum!',
      imgSrc: '/devices/6.svg',
    },
  ];

  return (
    <Section
      title="We Provide ypu  streaming experience across..."
      titleId="devices-title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus necessitatibus possimus, odio doloremque iure iste. Provident quas, quam sequi blanditiis non quaerat illo, numquam, similique ut sed nam assumenda."
    >
      <Grid columns={3}>
        {deviceItems.map((deviceItem, index) => (
          <DeviceCard
            key={index}
            {...deviceItem}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Devices;
