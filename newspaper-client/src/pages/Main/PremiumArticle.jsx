import React, { useState } from 'react';
import axiosSecure from '../../api';
import { useQuery } from '@tanstack/react-query';
import useUser from '../../hooks/useUser';

const PremiumArticle = () => {
    const [page, setPage] = useState(1)
    const limit = 10;
    
   const [userData] = useUser();


    const getArticle = async () => {
        const res = await axiosSecure.get(
          `/articles?page=${page}&limit=${limit}&status=approved&isPremium=yes`,
        )
        return res
      }

    
      const {
        data: articles,
        isLoading,
        isSuccess,
      } = useQuery({
        queryKey: ['article', page, limit],
        queryFn: getArticle,
      })


   console.log(articles?.data?.result);

    return (
      userData?.premiumTaken ?
        <div>
            {/* show artcile card   map ussing articles?.data?.result*/}
          show card
        </div> : <div className='flex justify-center items-center'>User Not Premium</div> 
      
    );
};

export default PremiumArticle;