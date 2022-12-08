// import { clear } from '@testing-library/user-event/dist/clear';
import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../../Styles/Sub Styles/AccountsDetails.module.scss";

const url = "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ";

function AccountsDetails() {
  const [account, setAccount] = useState("");
  const [accountType, setAccountType] = useState("Select account");
  const [accountData, setAccountData] = useState("");
  const [updatedData, setUpdatedData] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setAccount(response.data.accountsPage);
    });
  }, []);

  useEffect(() => {
    Object.keys(account).map((type, i) => {
      if (type == accountType) {
        setAccountData(Object.values(account)[i]);
      }
    });
  }, [accountType]);

  useEffect(() => {
    if (updatedData.profilePic) {
      setImageUrl(URL.createObjectURL(updatedData.profilePic));
    }
  }, [updatedData.profilePic]);

  if (account != "") {
    var AccountType = (type) => {
      // console.log(type.value)
      setAccountType(type.value);
    };

    var ImageData = (data) => {
      setImage(data);
    };
    // console.log(image)

    var submit = (event) => {
      event.preventDefault();
    };

    var AccountInfo = (key, value, img) => {
      // console.log(key, value)
      if (key == "profilePic") {
        setUpdatedData({
          ...updatedData,
          [key]: img.files[0],
        });
      } else {
        setUpdatedData({
          ...updatedData,
          [key]: value,
        });
      }
    };
    // console.log(updatedData, imageUrl)

    var UploadImage = () => {
      console.log(image);
    };

    var UpdateAccount = () => {};
  }

  return (
    <div className={classes.AccountsDetails}>
      <div
        onChange={(e) => {
          AccountType(e.target);
        }}
      >
        <h2>List of Accounts</h2>
        <p>Accounts</p>
        <select>
          <option>Select account</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Merchant</option>
          <option>Customer</option>
        </select>
      </div>

      <form
        onSubmit={submit}
        onChange={(e) => {
          AccountInfo(e.target.name, e.target.value, e.target);
        }}
      >
        <div className={classes.left}>
          <p>Change Avatar</p>
          <img
            title={
              account != "" && accountData != ""
                ? accountData.profilePic == ""
                  ? "New Image"
                  : accountType
                : "Image Not available"
            }
            src={
              imageUrl
                ? imageUrl
                : account != "" && accountData != ""
                ? accountData.profilePic == ""
                  ? "Not available"
                  : accountData.profilePic
                : "https://secure.gravatar.com/avatar/162f449adec6858c50e279ab862834ee?s=70&d=https%3A%2F%2Fwww.orbitmedia.com%2Fwp-content%2Fthemes%2Forbit-media%2Fimages%2Fno-image-speaker.jpg&r=g"
            }
          ></img>

          <button
            disabled={
              account != "" && accountType == "Select account" ? true : false
            }
            style={
              account != "" && accountType == "Select account"
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
            onClick={UploadImage}
          >
            {" "}
            <input
              type="file"
              name="profilePic"
              disabled={
                account != "" && accountType == "Select account" ? true : false
              }
              style={
                account != "" && accountType == "Select account"
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            ></input>
          </button>
        </div>

        <div className={classes.right}>
          <h2>Account Settings</h2>
          <div>
            <div>
              <p>Account Name</p>
              <input
                placeholder="Select Account"
                defaultValue={
                  account != "" && accountData != ""
                    ? accountData.name == ""
                      ? "Not available"
                      : accountData.name
                    : ""
                }
                type={"text"}
                name={"name"}
              ></input>
            </div>

            <div>
              <p>Account Email</p>
              <input
                defaultValue={
                  account != "" && accountData != ""
                    ? accountData.email == ""
                      ? "Not available"
                      : accountData.email
                    : ""
                }
                placeholder="Select Account"
                type={"email"}
                name={"email"}
              ></input>
            </div>

            <div>
              <p>Password</p>
              <input
                defaultValue={
                  account != "" && accountData != ""
                    ? accountData.password == ""
                      ? "Not available"
                      : accountData.password
                    : ""
                }
                placeholder="Select Account"
                type={"text"}
                name={"password"}
              ></input>
            </div>

            <div>
              <p>Phone</p>
              <input
                defaultValue={
                  account != "" && accountData != ""
                    ? accountData.phone == ""
                      ? "Not available"
                      : accountData.phone
                    : ""
                }
                placeholder="Select Account"
                type={"text"}
                name={"phone"}
              ></input>
            </div>
            <button
              onClick={UpdateAccount}
              disabled={
                account != "" && accountType == "Select account" ? true : false
              }
              style={
                account != "" && accountType == "Select account"
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              UPDATE YOUR PROFILE
            </button>
            <button
              disabled={
                account != "" && accountType == "Select account" ? true : false
              }
              style={
                account != "" && accountType == "Select account"
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              DELETE YOUR ACCOUNT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccountsDetails;
