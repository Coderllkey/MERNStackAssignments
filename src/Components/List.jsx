import React from 'react'
import Card from './Card'

const List = (props) => {

    let cardContent = <h5 className='message'>There is Nothing here yet. Add some</h5>;
    let num = 0;
    if (props.userobject.length > 0) {
        cardContent = props.userobject.map((user) => {
            num += 1;
            return (
                <Card css={"card"} key={user.email}>
                    <div className='c-container'>
                        <span className='num'> {num}</span>
                        <div>
                            <p>Name | {user.name}</p>
                            <p>Address | {user.address}</p>
                            <p>Email | {user.email}</p>
                        </div>
                       

                    </div>
                </Card>
            )
        })
    }



    return (<>
        {cardContent}
    </>
    )
}

export default List