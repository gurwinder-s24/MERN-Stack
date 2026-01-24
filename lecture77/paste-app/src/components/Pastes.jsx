import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice.jsx'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes); // state.sliceName.propertyName
  console.log(pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredPastes = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleEdit(pasteId) {
    navigate(`/?pasteId=${pasteId}`);
  }

  function handleView(pasteId) {
    navigate(`/pastes/${pasteId}`);
  }

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast("Content copied to clipboard!");
  }

  return (
    <div>
      <input className='p-2 px-4 rounded-lg min-w-150 mt-5 bg-[#0e0e0e]'
        type="search"
        placeholder='search here...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredPastes.length > 0 &&
          filteredPastes.map((paste) => {
            return (
              <div className='border' key={paste?._id}>

                {paste.title} <br />
                {paste.content}

                <div className='flex flex-row gap-3'>
                  <button onClick={() => handleEdit(paste?._id)}>Edit</button>
                  <button onClick={() => handleView(paste?._id)}>View</button>
                  <button onClick={() => handleDelete(paste?._id)}>Delete</button>
                  <button onClick={() => handleCopy(paste?.content)}>Copy</button>
                  <button>Share</button>
                </div>

                <div>
                  {paste.createdAt}
                </div>
              </div>
            )
          }
          )
        }
      </div>

    </div>
  )
}

export default Pastes
