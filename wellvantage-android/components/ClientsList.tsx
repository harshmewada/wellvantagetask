import { assignedClients } from "@/app/mockdata/assignedClients";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { StyleSheet } from "react-native";
import { usePagination } from "react-use-pagination";
import ClientCard from "./ClientCard";
import Pagination from "./Pagination";
import { VStack } from "./ui/vstack";
const ClientsList = () => {
  const tintColor = useThemeColor({}, "tint");

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
    totalItems: assignedClients.length,
    initialPageSize: 3,
  });
  return (
    <VStack space="md">
      {assignedClients.slice(startIndex, endIndex + 1).map((cl) => {
        return <ClientCard key={cl.id} {...cl} backgroundColor={tintColor} />;
      })}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={assignedClients.length}
        currentPage={currentPage}
        totalPages={totalPages}
        nextEnabled={nextEnabled}
        previousEnabled={previousEnabled}
        setPage={setPage}
      />
    </VStack>
  );
};

export default ClientsList;

const styles = StyleSheet.create({});
