
let DisplayUsers = ({users, currentSearchText}) => {
    
    // receives the users prop from parent and filters first for a match, and then maps the filtered results to html elements 
    return users.filter((user) => {
        return (user.phone_number.toLowerCase().match(currentSearchText.toLowerCase()) || user.first_name.toLowerCase().match(currentSearchText.toLowerCase()) || user.last_name.toLowerCase().match(currentSearchText.toLowerCase())
        )
    }).map((user, index) => {
        return (
        <div key={index}>
            <h2>User {index}</h2>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Phone Number: {user.phone_number}</p>
        </div>
        )
    }
    )
}
export default DisplayUsers
