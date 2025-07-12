import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { Plus } from 'react-feather';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();

  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    try {
      const res = await axios.get("http://localhost:5001/keys");

      const keys = res.data.keys
        .map(key => ({
          ...key,
          creation: new Date(key.creation).toDateString(),
          file: key.file.replace(/^.*[\\\/]/, '')
        }));
      setKeys(keys);
    } catch (error) {
      console.error("Error during the keys fetch:", error);
      setKeys([]);
    }
  };

  function handleShowModal(type, id) {
    setOpenModal({
      [type]: !openModal[type]
    })

    if (type === 'details' || type === 'delete') {
      setDetail(keys.find(key => key.id === id))
    }
  }

  function handleKeyDelete(deletedId) {
    setKeys(keys.filter(key => key.id !== deletedId));
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleReset() {
    setSearch('');
    fetchKeys();
  }

  return (
    <div className="home__container">
      <div className="home__header-container">
        <Header
          title={intl.formatMessage({ id: 'app.title' })}
          subtitle={intl.formatMessage({ id: 'header.subtitle' })}
          cards={[
            {
              label: intl.formatMessage({ id: 'header.totalKeys' }, { count: keys.length }),
              type: 'total'
            },
            {
              label: intl.formatMessage({ id: 'status.complete' }),
              type: 'complete'
            },
            {
              label: 'Private',
              type: 'private'
            }
          ]}
          keys={keys}
        />
      </div>
      <div className='home__search-bar'>
        <SearchBar
          onChange={(event) => handleChange(event)}
          onReset={(event) => handleReset(event)}
          value={search}
          placeholder={intl.formatMessage({ id: 'home.search.placeholder' })}
          resetButtonLabel={intl.formatMessage({ id: 'searchbar.reset' })}
        />
        <Button
          label={intl.formatMessage({ id: 'home.createNewKey' })}
          onClick={() => handleShowModal('new')}
          type='primary'
          icon={<Plus size={16} />}
        />
      </div>
      <Divider />
      <main>
        <Table
          headers={[
            intl.formatMessage({ id: 'table.name' }),
            intl.formatMessage({ id: 'table.type' }),
            intl.formatMessage({ id: 'table.file' }),
            intl.formatMessage({ id: 'table.notes' }),
            intl.formatMessage({ id: 'table.status' }),
            intl.formatMessage({ id: 'table.creation' }),
            intl.formatMessage({ id: 'table.actions' })
          ]}
          sshKeys={keys.some(key => key.file.includes(search)) ? keys.filter(key => key.file.includes(search)) : keys}
          onClickDetails={(id) => handleShowModal('details', id)}
          onClickDelete={(id) => handleShowModal('delete', id)}
          noKeysMessage={intl.formatMessage({ id: 'table.noKeys' })}
          detailsButtonLabel={intl.formatMessage({ id: 'app.details' })}
          deleteButtonLabel={intl.formatMessage({ id: 'app.delete' })}
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
        keyData={detail}
        onDelete={handleKeyDelete}
      />
      <ModalNewKey
        isOpen={openModal['new']}
        onClose={() => handleShowModal(null)}
        onKeyCreated={() => fetchKeys()}
      />
    </div>
  );
}

Home.propTypes = {
  locale: PropTypes.string,
  setLocale: PropTypes.func
};

Home.defaultProps = {
  locale: 'it',
  setLocale: () => { }
};

export default Home;
