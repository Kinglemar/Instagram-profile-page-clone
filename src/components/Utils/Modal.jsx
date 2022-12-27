import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import CustomButton from './CustomButton'
  
  export default function CustomModal(props) {
    const spinner = false
    return (
      <Modal motionPreset='slideInTop' scrollBehavior='inside' size='xl' isOpen={props.openModal} onClose={props.closeModal} isCentered>
        <ModalOverlay />
        <ModalContent>
            <div className="text-2xl">
            <ModalHeader>{props.title}</ModalHeader>
            </div>
          <ModalCloseButton />
          <ModalBody>
            <div className="min-h-[7rem]">
            {props.children}
            </div>
          </ModalBody>
  
          { props.footer ? <ModalFooter>
           
           <CustomButton clickEvent={props.closeModal} spinner={spinner} activeClass={'text-sm'} styleDefault={'border-black p-3 bg-gray-100 text-sm mr-5'} label={'Close'} />
            <CustomButton clickEvent={props.closeModal} spinner={spinner} activeClass={'text-sm'} styleDefault={'border-white text-sm text-white bg-blue-400'} label={'Done'}></CustomButton>
       
          </ModalFooter> : 
            <div className="h-[3rem]">

            </div>}
        </ModalContent>
      </Modal>
    )
  }
  
  // export default CustomModal