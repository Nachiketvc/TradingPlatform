// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import TopBar from './TopBar';
// import WatchList from './WatchList';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3002/api/feedback', formData);
//       if (response.status === 201) {
//         toast.success('Thank you for your feedback! We will strive to improve.');
//         setFormData({ name: '', email: '', message: '' });
//       }
//     } catch (error) {
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//   const pageStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Center horizontally
//     alignItems: 'center', // Center vertically
//     height: '100vh', // Full viewport height
//     backgroundColor: '#f4f4f4',
//   };

//   const formContainerStyle = {
//     width: '35.1%', // Minimum width
//     maxWidth: '100%', // Allow scaling up to 100%
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     fontFamily: "'Arial', sans-serif",
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   };

//   const inputStyle = {
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   };

//   const textareaStyle = {
//     ...inputStyle,
//     resize: 'none',
//     height: '100px',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#007BFF',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   };

//   const headingStyle = {
//     textAlign: 'center',
//     color: '#333',
//   };

//   return (
//     <>
//     <TopBar/>
//     <WatchList/>
//     <div style={pageStyle}>
//       <Toaster position="top-right" />
//       <div style={formContainerStyle}>
//         <h2 style={headingStyle}>Feedback Form</h2>
//         <form style={formStyle} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Feedback"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             style={textareaStyle}
//           ></textarea>
//           <button type="submit" style={buttonStyle}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default FeedbackForm;



import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import TopBar from './TopBar';
import WatchList from './WatchList';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/api/feedback', formData);
      if (response.status === 201) {
        toast.success('Thank you for your feedback! We will strive to improve.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const pageStyle = {
    position: 'absolute',
    top: '7.4vh',
    right: '0',
    width: '64.9%',
    height: '64.9vh',
    // backgroundColor: '#f5f5f5',
    padding: '20px',
    // border: '1px solid #ddd',
    // borderRadius: '10px',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: '100%',
    padding: '20px',
    // border: '1px solid #ddd',
    // borderRadius: '8px',
    // backgroundColor: '#fff',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Arial', sans-serif",
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'none',
    height: '100px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  return (
    <>
      <TopBar />
      <WatchList />
      <div style={pageStyle}>
        <Toaster position="top-right" />
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>Feedback Form</h2>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
            ></textarea>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;




