import Grid from '@/components/Grid';
import PlanCard from '@/components/PlanCard';
import Section from '@/layouts/Section';
import planGroups from './planGroups';

const Plans = () => {
  return (
    <Section
      title="Choose the plat that`s right for you"
      titleId="plans-id"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, animi doloremque asperiores quidem nihil, totam cum culpa repellat provident eveniet veniam esse nesciunt eius corrupti dolor saepe sunt ipsum officia!"
    >
      <Grid columns={3}>
        {planGroups[0].items.map((planItem, index) => (
          <PlanCard
            key={index}
            {...planItem}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Plans;
