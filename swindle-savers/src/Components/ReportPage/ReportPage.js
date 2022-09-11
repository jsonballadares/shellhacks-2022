import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import { Container, padding } from "@mui/system";
import { faker } from '@faker-js/faker';


export default function ReportPage() {
  const [firstName, setFirstName] = useState("");
  const onFirstNameChange = (e) => setFirstName(e.target.value);

  const [lastName, setLastName] = useState("");
  const onLastNameChange = (e) => setLastName(e.target.value);

  const [zipCode, setZipCode] = useState("");
  const onZipCodeChange = (e) => setZipCode(e.target.value);

  const [reporterAge, setReporterAge] = useState("");
  const onReporterAgeChange = (e) => setReporterAge(e.target.value);

  const [reporterRace, setReporterRace] = useState("");
  const onReporterRaceChange = (e) => setReporterRace(e.target.value);

  const [swindleName, setSwindleName] = useState("");
  const onSwindleNameChange = (e) => setSwindleName(e.target.value);

  const [swindleDescription, setSwindleDescription] = useState("");
  const onSwindleDescriptionChange = (e) => setSwindleDescription(e.target.value);

  const [swindler, setSwindler] = useState("");
  const onSwindlerChange = (e) => setSwindler(e.target.value);

  const [submit, setSubmit] = useState(false);
            
  const handleSubmit = () => {
    setSubmit(true)
    makeRequest()
    clearTextFields()
    setSubmit(false)
  };

  function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
  } 

  function makeRequest() {
    console.log('Send a request somewhere');
    console.log({
        // "firstName": firstName,
        // "lastName": lastName,
        // "zipCode": zipCode,
        // "reporterAge": reporterAge,
        // "reporterRace": reporterRace,
        // "swindleName": swindleName,
        // "swindleDescription": swindleDescription,
        // "swindler": swindler,
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "zipCode": faker.address.zipCode(),
        "reporterAge": randomNumber(18,150),
        "reporterRace": faker.hacker.abbreviation(),
        "swindleName": faker.name.firstName(),
        "swindleDescription": faker.company.bs() + " " + faker.company.catchPhrase(),
        "swindler": faker.name.firstName(),
    })
  }

  function clearTextFields() {
    setFirstName('')
    setLastName('')
    setReporterAge('')
    setReporterRace('')
    setSwindleName('')
    setSwindleDescription('')
    setSwindler('')
    setZipCode('')
  }

  return (
    <Container>
        <TextField sx={{ display: 'flex', paddingBottom: 5}}
            onChange={onFirstNameChange}
            value={firstName}
            label={"First Name"}
        />

        <TextField sx={{ display: 'flex', paddingBottom: 5 }}
            onChange={onLastNameChange}
            value={lastName}
            label={"Last Name"}
        />

        <TextField sx={{ display: 'flex', paddingBottom: 5 }}
            onChange={onZipCodeChange}
            value={zipCode}
            label={"Zip Code"}
        /> 

        <TextField sx={{ display: 'flex', paddingBottom: 5 }}
            onChange={onReporterAgeChange}
            value={reporterAge}
            label={"Reporter Age"}
        />

        <TextField sx={{ display: 'flex', paddingBottom: 5 }}
            onChange={onReporterRaceChange}
            value={reporterRace}
            label={"Reporter Race"}
        />

        <TextField sx={{ display: 'flex', paddingBottom: 5 }}
            onChange={onSwindleNameChange}
            value={swindleName}
            label={"Swindle Name"}
        />

        <TextField sx={{ display: 'flex', paddingBottom: 5, overflowWrap: "break-word" }}
            onChange={onSwindleDescriptionChange}
            value={swindleDescription}
            label={"Swindle Description"}
        />

        <TextField sx={{ display: 'flex', paddingBottom: 5 }}
            onChange={onSwindlerChange}
            value={swindler}
            label={"Swindler"}
        />

        <Button variant="contained" onClick={handleSubmit} disabled={submit} >Submit</Button>
    </Container>
  );
};
