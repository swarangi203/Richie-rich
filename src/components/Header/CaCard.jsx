import { Card, Avatar, Typography } from '@mui/material';

function CaCard({ name, experience, contact, email, image }) {
  return (
    <Card
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        marginBottom: '16px',
        width: '500px',
        marginTop:'3px'
      }}
    >
      {/* Profile Picture */}
      <Avatar
        alt={name}
        src={image}
        style={{
          width: 64,
          height: 64,
          marginRight: '16px',
        }}
      />

      {/* Info */}
      <div style={{ flexGrow: 1 }}>
        {/* Name & Experience */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            ({experience} yrs)
          </Typography>
        </div>

        {/* Contact & Email */}
        <div
          style={{
            marginTop: '8px',
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body2" color="textSecondary">
            📞 {contact}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ✉️ {email}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

const CaList = () =>{

const caList = [
    {
      name: 'Rohit Sharma',
      experience: 5,
      contact: '+91 9876543210',
      email: 'rohit.sharma@caindia.com',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Anjali Mehta',
      experience: 8,
      contact: '+91 9898989898',
      email: 'anjali.mehta@caindia.com',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Amit Deshmukh',
      experience: 4,
      contact: '+91 9123456789',
      email: 'amit.deshmukh@caindia.com',
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      name: 'Priya Kapoor',
      experience: 6,
      contact: '+91 9988776655',
      email: 'priya.kapoor@caindia.com',
      image: 'https://i.pravatar.cc/150?img=4'
    },
    {
      name: 'Manish Agarwal',
      experience: 10,
      contact: '+91 9012345678',
      email: 'manish.agarwal@caindia.com',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'Sneha Patil',
      experience: 3,
      contact: '+91 9345612789',
      email: 'sneha.patil@caindia.com',
      image: 'https://i.pravatar.cc/150?img=6'
    },
    {
      name: 'Deepak Reddy',
      experience: 7,
      contact: '+91 8888555533',
      email: 'deepak.reddy@caindia.com',
      image: 'https://i.pravatar.cc/150?img=7'
    },
    {
      name: 'Ritika Joshi',
      experience: 2,
      contact: '+91 9765432180',
      email: 'ritika.joshi@caindia.com',
      image: 'https://i.pravatar.cc/150?img=8'
    },
    {
      name: 'Siddharth Jain',
      experience: 9,
      contact: '+91 9865321470',
      email: 'siddharth.jain@caindia.com',
      image: 'https://i.pravatar.cc/150?img=9'
    },
    {
      name: 'Neha Verma',
      experience: 5,
      contact: '+91 9845123780',
      email: 'neha.verma@caindia.com',
      image: 'https://i.pravatar.cc/150?img=10'
    },
    {
      name: 'Rajesh Khanna',
      experience: 11,
      contact: '+91 9000000001',
      email: 'rajesh.khanna@caindia.com',
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Kavita Bansal',
      experience: 6,
      contact: '+91 9333222211',
      email: 'kavita.bansal@caindia.com',
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Arjun Rao',
      experience: 4,
      contact: '+91 9555533322',
      email: 'arjun.rao@caindia.com',
      image: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Meera Iyer',
      experience: 7,
      contact: '+91 9090909090',
      email: 'meera.iyer@caindia.com',
      image: 'https://i.pravatar.cc/150?img=14'
    },
    {
      name: 'Harshad Kulkarni',
      experience: 12,
      contact: '+91 9666611111',
      email: 'harshad.kulkarni@caindia.com',
      image: 'https://i.pravatar.cc/150?img=15'
    }
  ];
  

    return (
        <div style ={{overflow:'scroll',height:'80vh',background:'#C7DFEF', scrollbarWidth: 'none', msOverflowStyle: 'none',justifyItems:'center', paddingTop:20}}>
            {caList.map((ca) =>{
                return <CaCard name={ca.name}
                experience={ca.experience}
                contact={ca.contact}
                email={ca.email}
                image={ca.image}/>
            })}
        </div>
    )
}

export default CaList;
