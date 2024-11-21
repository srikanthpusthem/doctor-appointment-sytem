import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Richard James',
    specialty: 'General Physician',
    experience: '4 Years',
    description: 'Dr. Richard has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fee: '$50',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Dr. Sarah Connor',
    specialty: 'Cardiologist',
    experience: '6 Years',
    description: 'Dr. Sarah specializes in diagnosing and treating heart conditions.',
    fee: '$70',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialty: 'Dermatologist',
    experience: '5 Years',
    description: 'Dr. Emily is skilled in treating skin conditions and offering skincare advice.',
    fee: '$60',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Dr. Mark Smith',
    specialty: 'Pediatrician',
    experience: '10 Years',
    description: 'Dr. Mark specializes in the health of children, from infancy through adolescence.',
    fee: '$55',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Dr. Angela Lee',
    specialty: 'Orthopedic Surgeon',
    experience: '8 Years',
    description: 'Dr. Angela focuses on conditions involving the musculoskeletal system.',
    fee: '$75',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Dr. James Brown',
    specialty: 'Endocrinologist',
    experience: '7 Years',
    description: 'Dr. James specializes in hormonal disorders and metabolic issues.',
    fee: '$65',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 4.4,
  },
  {
    id: 7,
    name: 'Dr. Lisa White',
    specialty: 'Neurologist',
    experience: '9 Years',
    description: 'Dr. Lisa treats disorders of the nervous system and brain.',
    fee: '$80',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Dr. Paul Green',
    specialty: 'Gastroenterologist',
    experience: '6 Years',
    description: 'Dr. Paul focuses on the digestive system and its disorders.',
    fee: '$70',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    rating: 4.5,
  },
  {
    id: 9,
    name: 'Dr. Nancy Davis',
    specialty: 'Ophthalmologist',
    experience: '11 Years',
    description: 'Dr. Nancy specializes in eye and vision care.',
    fee: '$90',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    rating: 4.6,
  },
  {
    id: 10,
    name: 'Dr. Daniel Martin',
    specialty: 'Psychiatrist',
    experience: '12 Years',
    description: 'Dr. Daniel provides mental health treatment and therapy.',
    fee: '$85',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    rating: 4.3,
  },
  {
    id: 11,
    name: 'Dr. Lisa Taylor',
    specialty: 'Gynecologist',
    experience: '10 Years',
    description: 'Dr. Lisa specializes in women\'s reproductive health.',
    fee: '$75',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    rating: 4.5,
  },
  {
    id: 12,
    name: 'Dr. Robert Wilson',
    specialty: 'Urologist',
    experience: '5 Years',
    description: 'Dr. Robert focuses on urinary tract health and male reproductive organs.',
    fee: '$65',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    rating: 4.4,
  },
  {
    id: 13,
    name: 'Dr. Sophia Adams',
    specialty: 'Hematologist',
    experience: '8 Years',
    description: 'Dr. Sophia specializes in blood disorders and cancers.',
    fee: '$80',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    rating: 4.7,
  },
  {
    id: 14,
    name: 'Dr. William Hall',
    specialty: 'Oncologist',
    experience: '15 Years',
    description: 'Dr. William specializes in cancer treatment and research.',
    fee: '$100',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    rating: 4.8,
  },
  {
    id: 15,
    name: 'Dr. Julia Scott',
    specialty: 'Radiologist',
    experience: '7 Years',
    description: 'Dr. Julia specializes in interpreting medical images.',
    fee: '$90',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    rating: 4.6,
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const navigate = useNavigate();

  const handleDoctorClick = (doctor) => {
    navigate(`/doctor/${doctor.id}`, { state: { doctor } });
  };

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Healthcare Portal</h1>
        <div className="header-buttons">
          <button onClick={() => navigate('/login')}>Log In</button>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/find-doctors')}>Find My Doctors</button>
        </div>
      </header>
      <h2>Find Your Specialist</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
          <option value="All">All Specialties</option>
          <option value="General Physician">General Physician</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
          <option value="Endocrinologist">Endocrinologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gastroenterologist">Gastroenterologist</option>
          <option value="Ophthalmologist">Ophthalmologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Urologist">Urologist</option>
          <option value="Hematologist">Hematologist</option>
          <option value="Oncologist">Oncologist</option>
          <option value="Radiologist">Radiologist</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="doctor-list">
        {doctors
          .filter((doctor) =>
            specialty === 'All' || doctor.specialty.includes(specialty)
          )
          .map((doctor) => (
            <div className="doctor-card" key={doctor.id} onClick={() => handleDoctorClick(doctor)}>
              <img src={doctor.image} alt={doctor.name} />
              <h2>{doctor.name}</h2>
              <p>{doctor.specialty}</p>
              <p>Experience: {doctor.experience}</p>
              <p>Rating: {doctor.rating} ⭐</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
