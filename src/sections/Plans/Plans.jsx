import Grid from '@/components/Grid';
import PlanCard from '@/components/PlanCard';
import Tabs from '@/components/Tabs';
import TabsNavigation from '@/components/Tabs/components/TabsNavigation';
import Section from '@/layouts/Section';
import planGroups from './planGroups';

const Plans = () => {
  const tabsTitle = 'plans-tabs';
  const tabsNavigationId = 'plans-tabs-navigation';

  return (
    <Section
      title="Choose the plat that`s right for you"
      titleId="plans-id"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, animi doloremque asperiores quidem nihil, totam cum culpa repellat provident eveniet veniam esse nesciunt eius corrupti dolor saepe sunt ipsum officia!"
      actions={(
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={planGroups}
        />
      )}
    >

      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planGroups.map(planGroup => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          children: (
            <Grid columns={3}>
              {planGroup.items.map((planItem, index) => (
                <PlanCard
                  key={index}
                  {...planItem}
                />
              ))}
            </Grid>
          ),
        }))}
      />
    </Section>
  );
};

export default Plans;
