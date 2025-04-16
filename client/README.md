
  //global state
 ## const dataapi = useSelector((state) => state.dbdata);
  //calling get api
##  const { data, isLoading } = useGetnjspostQuery("67fcbc25a604384fa7d10511");


  //when data come
  //  isloading =false and 
  // data add to global state
## useEffect(() => {
##  if (!isLoading) {
##     dispatch(datainsert(data));
# #   }
##  }, [data, isLoading]);

  // dataapi=$undefine=null=false, 
  //data comes and console log
 # if (dataapi) {
 #   console.log(dataapi);
#   }
