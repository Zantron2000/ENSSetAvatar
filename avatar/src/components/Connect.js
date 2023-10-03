import { Button, Nav, Navbar, NavbarText, NavItem, NavLink } from 'reactstrap'

import React from "react";

class WalletConnecter extends React.Component {
    render() {
        return (
            <div>
                <Navbar expand='md' sticky='true' className=''>
                    <Nav className="me-auto flex-grow-1 justify-content-evenly" navbar>
                        <NavItem>
                        <NavLink href="https://xanderpalmer.eth.limo/" target={"_blank"} className='text-light'>XanderPalmer.eth</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavbarText className='text-light'>Update and Customize your ENS Domain</NavbarText>
                        </NavItem>
                    </Nav>
                </Navbar>
                
                <div className='text-light'>
                    <h1>Set an NFT as your ENS Avatar</h1>
                    <p>To set or change the ENS avatar you need to connect your wallet.</p>
                    <Button onClick={() => this.props.connectWallet()}>Connect Wallet</Button>
                </div>
            </div>
        )
    }
}

export default WalletConnecter