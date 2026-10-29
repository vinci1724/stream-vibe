import Accordion from '@/components/Accordion';
import AccordionGroup from '@/components/AccordionGroup';
import Button from '@/components/Button';
import Section from '@/layouts/Section';

const Questions = () => {
  const questionItems = [
    'What devices can I use to stream your content?',
    'How many devices can stream at the same time?',
    'Can I download movies and shows for offline viewing?',
    'Do you offer a free trial, and how do I cancel it?',
    'How much does a subscription cost, and what plans are available?',
    'How often is new content added to the platform?',
    'Can I share my account with my family members?',
    'What internet speed do I need for HD and 4K streaming?',
  ];

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis hic neque mollitia quam magnam! Voluptate natus sit dolores officia quisquam doloribus exercitationem, nemo quod esse omnis repudiandae quia! Architecto."
      actions={<Button label="Ask a Question" href="/support" />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion
            key={index}
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
          >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in voluptatum id sapiente, laboriosam rerum veritatis maiores architecto eaque fugit? Tempore harum corporis quibusdam iure, sunt reprehenderit porro similique dicta!</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  );
};

export default Questions;
