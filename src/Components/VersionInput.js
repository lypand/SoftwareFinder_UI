import React, { useState, useEffect } from 'react'

import { Container, Row, Button, Form } from 'react-bootstrap'
import '../Style/VersionInput.css'

const Version = ({ searchProducts, errorMessage = 'Invalid Input (#.#.#)(#.#)(#)' }) => {
  const [version, setVersion] = useState('')
  const [isInputValid, setIsInputValid] = useState(true)
  const [firstUpdate, setFirstUpdate] = useState(true)

  useEffect(() => {
    if (firstUpdate) {
      setFirstUpdate(false)
      return;
    }
    validate()
  }, [version])

  const submitVersion = () => {
    searchProducts(version)
  }

  const validate = () => {
    // Only values between 0-9
    const reg = new RegExp('^[0-9]+$')

    if (version.length < 0) {
      setIsInputValid(false)
      return
    }
    if (!version.includes('.') &&
            reg.test(version)) {
      setIsInputValid(true)
      return
    }
    const split = version.split('.')
    if (split.length > 3) {
      setIsInputValid(false)
      return
    }
    for (const number of split) {
      if (!reg.test(number)) {
        setIsInputValid(false)
        return
      }
    }
    setIsInputValid(true)
  }

  return (
        <Container>
            <Row >
                <p></p>
                <p className="ErrorMessage">{isInputValid ? '' : errorMessage}</p>
            </Row>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>Version Number:</Form.Label>
                        <Form.Control placeholder="e.g. 9.9.9" value={version} onChange={e => setVersion(e.target.value)} type="text" name="Version" />
                    </Form.Group>
                    <br></br>
                    <Button variant="success" disabled={!isInputValid} onClick={() => submitVersion()}>Submit</Button>
                </Form>
            </Row>
        </Container>
  )
}

export default Version
