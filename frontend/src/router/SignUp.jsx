import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { signUpApi } from "../action/action";

const country = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

const SignUp = () => {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = await signUpApi(input);
    console.log(req);
  };
  return (
    <div className="grid grid-cols-2 gap-9 bg-[#f8f8fa] w-full">
      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/f021/d0eb/be3e660c38ff71b05466d38cffe414ba?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NfTDjkoDBCECMQQEln1jCZK9BKTWbiyzibHKA7H~LqE9pUZTGVP92V5eGaGdWiVQ~sEeDTjYytroselzh3W~TxZzQCAgmjmIDKwOKQA1w-okPI8pJFUu04nA0i3xWe57NAQaGS8qpG6nQv6ShefzYFH5gYgDgD636tOBeSVemDVPi~K6~pbXhu-O11ar1qH9q3SpSNT2RUI5R4-GUcgtKsYiE6NnBHXWl5PUTdx2-3l~8zJ08t2DHt0SpLutHGcOJqXPEa7DWrFKRwwhIEbmprYwI2H0qaziH-e1e6uMNM~anxikuZ3t5x0cgSikOqXNkvAuBmHGz0ybuMVWL4oynQ__"
          alt=""
          className="h-full object-cover"
        />
        <div className="absolute top-44 left-2 text-white space-y-7 p-9">
          <p className="  text-3xl font-semibold ">
            Passive Fundraising Made Simple Supporting Schools with Ease
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col p-8 mx-20">
        <div className="flex items-center justify-center w-56 mb-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/3ac8/394e/d6c4dd5ee2b53797b553ea9a376223ef?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KgE4w6SL7m7EB1KqV9egOljZAAh2xqP10DUnOsqr2HbROGYkIdNyQN~d2-c1deJQWRPADij1ysp46bYnzETp93CM31U~ByzmWPShDBJLZDTmkJIe15gL88rMXNyhvuoD~sTxqZMNBXZcE~dz0iZyNGn6Fewf5-g2Q28aD8k4UP6SeuO7~HxsaT-SNAxke-JteQEeUcRaizPoD7BWR5NlspuHYuhzdVCrtAD~YpRjpqxm651u6S4J1mKnfYE6fBXGtmkmnzFlJbQc25G3rRWA5Y-B5yMHDlQi-4WhiLwe2mHQf6SLH2wror7C5p12RodT4Qmsrqy511zzsYgIKFTbQg__"
            alt=""
            className="h-full w-56"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Sign Your School Up Now</h1>
          </div>

          <div>
            <p className="text-gray-700 mb-2 text-sm">School Name</p>
            <input
              type="text"
              className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
              name="schoolName"
              onChange={handleChange}
              value={input?.schoolName}
              required
            />
          </div>
          <div>
            <p className="text-gray-700 mb-2 text-sm">Contact Person</p>
            <input
              type="text"
              className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
              name="contactPerson"
              onChange={handleChange}
              value={input?.contactPerson}
              required
            />
          </div>

          <div className="flex gap-4">
            <div>
              <p className="text-gray-700 mb-2 text-sm">Email</p>
              <input
                type="email"
                className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                name="email"
                onChange={handleChange}
                value={input?.email}
                required
              />
            </div>
            <div>
              <p className="text-gray-700 mb-2 text-sm">Phone Number</p>
              <input
                type="number"
                className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                name="phoneNumber"
                onChange={handleChange}
                value={input?.phoneNumber}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-semibold">Address Details</h1>
            <div className="flex gap-4">
              <div>
                <p className="text-gray-700 mb-2 text-sm">Street Address</p>
                <input
                  type="text"
                  className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                  name="streetAddress"
                  onChange={handleChange}
                  value={input?.streetAddress}
                  required
                />
              </div>
              <div>
                <p className="text-gray-700 mb-2 text-sm">Address Line 2</p>
                <input
                  type="text"
                  className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                  name="addressLine2"
                  onChange={handleChange}
                  value={input?.addressLine2}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <p className="text-gray-700 mb-2 text-sm">City</p>
                <input
                  type="text"
                  className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                  name="city"
                  onChange={handleChange}
                  value={input?.city}
                  required
                />
              </div>
              <div>
                <p className="text-gray-700 mb-2 text-sm">State</p>
                <input
                  type="text"
                  className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                  name="state"
                  onChange={handleChange}
                  value={input?.state}
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <p className="text-gray-700 mb-2 text-sm">ZIP Code</p>
                <input
                  type="number"
                  className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
                  name="zipCode"
                  onChange={handleChange}
                  value={input?.zipCode}
                  required
                />
              </div>
              <div>
                <p className="text-gray-700 mb-2 text-sm">Country</p>
                <select
                  name="country"
                  defaultValue=""
                  value={input?.country}
                  className="border rounded-md h-8 w-full bg-white"
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {country.map((item, index) => (
                    <option value={item?.name} key={index}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-700 mb-2 text-sm">Password</p>
            <input
              type="password"
              className="border rounded-md h-8 outline-none px-1 py-2 w-full bg-white"
              name="password"
              onChange={handleChange}
              value={input?.password}
              required
            />
          </div>

          <div className="flex items-center justify-center mt-4">
            <button className="bg-[#5aad18] p-3 rounded-full w-52">
              Submit
            </button>
          </div>
          <div className="border-t mt-4">
            <p className="mt-4 text-center">
              Already have an account?
              <NavLink to={"/login"} className="text-[#5aad18]">
                Log in
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
