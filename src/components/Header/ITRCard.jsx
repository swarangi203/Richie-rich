import { Card, Typography } from '@mui/material';

function ITRCard({ title, link }) {
  return (
    <Card
      style={{
        padding: '16px',
        marginBottom: '16px',
        width: '500px',
        marginTop: '3px',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="primary">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </Typography>
    </Card>
  );
}

const ITRList = () => {
  const itrResources = [
    {
      title: 'How to File ITR-1 Online for AY 2025-26 (Salaried)',
      link: 'https://www.youtube.com/watch?v=hZLhttn5rtQ',
    },
    {
      title: 'Beginner’s Guide to Income Tax Filing (HDFC)',
      link: 'https://www.youtube.com/watch?v=HZWTm5RYDNE',
    },
    {
      title: 'Step-by-Step Blog for ITR Filing in India – JJ FinTax',
      link: 'https://www.jjfintax.com/blogs/income-tax/a-complete-guide-of-itr-filing-in-india-everything-you-need-to-know',
    },
    {
      title: 'Complete Video Tutorial for ITR-2 (Capital Gains etc.)',
      link: 'https://www.youtube.com/watch?v=Rtcu6IFL88o',
    },
    {
      title: 'NRI’s Guide to ITR Filing in India',
      link: 'https://www.dineshaarjav.com/blog-detail/itr-filing-for-nris-ay-2025-26',
    },
    {
      title: 'How to Select the Right ITR Form',
      link: 'https://www.taxbuddy.com/blog/how-to-select-right-itr-form',
    },
    {
      title: 'Avoid These 7 Common ITR Mistakes (TOI)',
      link: 'https://timesofindia.indiatimes.com/business/financial-literacy/taxation/itr-filing-fy-2024-25-income-tax-payers-take-note-these-7-mistakes-in-income-tax-return-filing-this-year-can-cost-you-big/articleshow/121565615.cms',
    },
    {
      title: 'How to e-Verify Your ITR After Filing',
      link: 'https://cleartax.in/s/e-verify-income-tax-return',
    },
    {
      title: 'Guide to ITR Filing for Freelancers & Consultants',
      link: 'https://www.indmoney.com/articles/tax/itr-for-freelancers-in-india',
    },
    {
      title: 'What Documents Are Needed to File ITR',
      link: 'https://www.jagranjosh.com/general-knowledge/documents-required-for-itr-filing-1677473189-1',
    },
  ];

  return (
    <div
      style={{
        overflow: 'scroll',
        height: '80vh',
        background: '#C7DFEF',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        justifyItems: 'center',
        paddingTop: 20,
        paddingLeft: 20,
      }}
    >
      {itrResources.map((resource, index) => (
        <ITRCard key={index} title={resource.title} link={resource.link} />
      ))}
    </div>
  );
};

export default ITRList;
