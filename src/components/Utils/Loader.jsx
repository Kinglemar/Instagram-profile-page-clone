import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function Loader() {
  return (
    <div className="w-[293px] h-[293px] mb-8 mx-auto">
      <Box padding='6' boxShadow='sm' bg='white'>
      <Skeleton height='152px' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </div>
  );
}
