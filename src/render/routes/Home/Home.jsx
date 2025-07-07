import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { Plus } from 'react-feather';
// import { doExample } from '@store/actions/home';
// import { nullSafe } from '@utils/globalMethods';
import Header from '@components/Header';
import Button from '@components/Button';
import Table from '@components/Table';
import ModalDetail from '@components/ModalDetail';
import ModalDeleteKey from '@components/ModalDeleteKey';
import ModalNewKey from '@components/ModalNewKey';
import Divider from '@components/Divider';
import SearchBar from '@components/SearchBar';
import './Home.scss';

const Home = () => {
  const [keys, setKeys] = useState([]);
  const [openModal, setOpenModal] = useState({});
  const [detail, setDetail] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    const res = await axios.get("http://localhost:5000/keys");

    const keys = res.data.keys
      .map(key => ({
        ...key,
        creation: new Date(key.creation).toDateString(),
        file: key.file.replace(/^.*[\\\/]/, '')
      }));

    console.log(keys)

    setKeys(keys);
  };

  // This method open the details modal
  function handleShowModal(type, id) {
    setOpenModal({
      [type]: !openModal[type]
    })

    if (type === 'details') {
      setDetail(keys.find(key => key.id === id))
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="home__container">
      <Header keys={keys} />
      <div className='home__search-bar'>
        <SearchBar onChange={(event) => handleChange(event)} />
        <Button
          label='Create New Key'
          onClick={() => handleShowModal('new')}
          type='secondary'
          icon={<Plus />}
        />
      </div>
      <Divider />
      <main>
        <Table
          headers={[
            'Name',
            'Type',
            'File',
            'Notes',
            'Status',
            'Creation',
            'Actions'
          ]}
          sshKeys={keys.some(key => key.file.includes(search)) ? keys.filter(key => key.file.includes(search)) : keys}
          onClickDetails={(id) => handleShowModal('details', id)}
          onClickDelete={(id) => handleShowModal('delete', id)}
        />
      </main>
      <ModalDetail
        isOpen={openModal['details']}
        onClose={() => handleShowModal(null)}
        detail={detail}
      />
      <ModalDeleteKey
        isOpen={openModal['delete']}
        onClose={() => handleShowModal(null)}
        detail={detail}
      />
      <ModalNewKey
        isOpen={openModal['new']}
        onClose={() => handleShowModal(null)}
        detail={detail}
      />
    </div>
  );
}

Home.propTypes = {
  // Add here some propTypes
};

Home.defaultProps = {
  // Add here some default propTypes values
};

export default Home;
