import ClientsList from "@/components/ClientsList";
import Pagination from "@/components/Pagination";
import SessionsList from "@/components/SessionsList";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { ScrollView } from "react-native";
import { usePagination } from "react-use-pagination";
import { pastSessions, upComingSessions } from "./mockdata/sessionsData";
const Client = () => {
  const backgroundColor = useThemeColor({}, "background");
  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
    setPage,
  } = usePagination({
    totalItems: pastSessions.length,
    initialPageSize: 2,
  });
  return (
    <ScrollView>
      <Box className="px-5 py-10">
        <VStack space="2xl">
          <Box className="p-2">
            <Center>
              <Text size="3xl" bold>
                Assigned Clients
              </Text>
            </Center>
          </Box>
          <Box>
            <ClientsList />
          </Box>
          <Box>
            <SessionsList
              tableTitle="Upcoming Sessions"
              data={upComingSessions}
              hasCancelAction={true}
            />
          </Box>

          <Box>
            <SessionsList
              tableTitle="Past Sessions"
              data={pastSessions.slice(startIndex, endIndex + 1)}
              hasCancelAction={false}
            />
          </Box>
          <Box>
            <Pagination
              startIndex={startIndex}
              endIndex={endIndex}
              totalItems={pastSessions.length}
              currentPage={currentPage}
              totalPages={totalPages}
              nextEnabled={nextEnabled}
              previousEnabled={previousEnabled}
              setPage={setPage}
            />
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Client;
