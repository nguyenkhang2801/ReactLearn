import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';


HomePage.propTypes = {

}

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}

function HomePage(props) {
    // strict === re-render if state change
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    // shallow === 
    // const hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId,
    // }), shallowEqual);

    const dispatch = useDispatch();

    console.log('Hobby List:', hobbyList);

    const handleAddHobbyClick = () => {
        //random id+ title

        const newId = randomNumber();
        const newHobby = {
            // id: casual.uuid,
            // title: casual.title,
            id: newId,
            title: `Hobby ${newId}`,
        }
        //dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            heheheheh
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
};

export default HomePage;