import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import ProfilePicture from './ProfilePicture';
import MatchMsgButton from './MatchMsgButton';
import AppHeader from './AppHeader';

const Profile = props => {

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <ProfilePicture imageLink="https://files.slack.com/files-pri/T0351JZQ0-FTZB36E7N/dragon_but_rly_pissed_at_donkey.png"/>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1 className="user-name">Dragon</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
                    <div className="about-me">
                        <p>Looking for a new mans that can handle all this 🔥🔥</p>
                        <p>NO ASSES, Treasure only 💎, Bad Boys, Corpses</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 4 }}>
                    <MatchMsgButton text="Find Match!" link="/1" />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile