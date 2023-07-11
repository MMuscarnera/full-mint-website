import React from 'react';
// import {useState} from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import useMediaQuery from './hooks/useMediaQuery';
import { Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

// const PageLink = ({page, currentAcount, setAccounts}) => {
//     const lowerCasePage = page.toLowerCase();
//     return (
//         <AnchorLink
//             className={`${currentAcount === lowerCasePage ? "text-yellow" : ""}
//                 hover:text-yellow transition duration-500`}
//             href={`#${lowerCasePage}`}
//             onClick={() => setAccounts(lowerCasePage)}
//         ></AnchorLink>
//     )
// }

const NavBar = ({ accounts, setAccounts, currentPage, setCurrentPage}) => {
    // const [isMenuToggled, setIsMenuToggled] = useState(false);
    // isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const isConnected = Boolean(accounts[0]);

    const handleNavClick = (page) => {
        setCurrentPage(page);
    }

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
                { /* Left Side - Social Icons */}
                <Flex justify="space-around" width="40%" padding="0 75px">
                    <Link href="https://www.facebook.com">
                        <Image src={Facebook} boxSize="42px" margin="0 15px" />
                    </Link>
                </Flex>
                <Flex justify="space-around" width="40%" padding="0 75px">
                    <Link href="https://www.twitter.com">
                        <Image src={Twitter} boxSize="42px" margin="0 15px" />
                    </Link>
                </Flex>
                <Flex justify="space-around" width="40%" padding="0 75px">
                    <Link href="https://www.discord.com">
                        <Image src={Email} boxSize="42px" margin="0 15px" />
                    </Link>
                </Flex>

                {/* Right Side - SEctions and Connect */}
                <Flex justify="space-around" align="center" width="40%" padding="30px">
                    <Box margin="0 15px">
                        About
                    </Box>
                    <Spacer />
                    <Box margin="0 15px">
                         <Link to="/home" onClick={() => handleNavClick('home')}>Mint</Link>
                         </Box>
                    <Spacer />
                    <Box margin="0 15px">
                         <Link to="/team" onClick={() => handleNavClick('team')}>Team</Link>
                    </Box>
                    <Spacer />
                    { /* Connect */}
                    {isConnected ? (
                        <Box margin="0 15px">Connected</Box>
                    ) : (
                        <Button
                            backgroundColor="#D6517D"
                            borderRadius="5px"
                            boxShadow="0 px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="0 15px"
                            onClick={connectAccount}>Connect
                        </Button>
                    )}
                </Flex>
        </Flex>

    );
};

export default NavBar