const UserForm = ({formName}) => {
  return (
    <form>
        <h3>{formName}</h3>
      <label htmlFor="fname">First name</label>
      <input type="text" id="fname" name="fname" />
      <label htmlFor="lname">Last name</label>
      <input type="text" id="lname" name="lname" />
      <label htmlFor="avatar">Avatar URL</label>
      <input type="text" id="avatar" name="avatar"/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
