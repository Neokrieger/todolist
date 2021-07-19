function SubmitBar(){
  return(
    <form id="submitBar" name="submitBar">
      <label>
        To Do:
        <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default SubmitBar;
