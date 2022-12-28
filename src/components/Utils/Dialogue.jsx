import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button
  } from '@chakra-ui/react'
import Preloader from './Preloader'

export default function Dialogue({isOpen, onClose, clicked, spinner, title = 'Bulk delete', count}){
    return(
        <AlertDialog
        motionPreset='slideInBottom'
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{ title }</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to discard all of your picture{count > 1 ? 's' : ''}? {count} picture{count > 1 ? 's' : ''} will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>
              No
            </Button>
            <Button onClick={clicked} colorScheme='red' ml={3}>
                {spinner ? <Preloader/> : 'Yes'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}