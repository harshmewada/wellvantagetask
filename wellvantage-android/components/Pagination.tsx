import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";

interface PaginationProps {
  startIndex: number;
  endIndex: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  nextEnabled: boolean;
  previousEnabled: boolean;
  setPage: (val: number) => void;
}
const Pagination = ({
  startIndex,
  endIndex,
  totalItems,
  totalPages,
  currentPage,
  setPage,
}: PaginationProps) => {
  return (
    <HStack space="lg" className="items-center">
      <Text bold>
        Showing {startIndex + 1} to {endIndex + 1} of {totalItems} entries
      </Text>
      <Box>
        <HStack space="md" className="justify-center items-center">
          <TouchableOpacity onPress={() => setPage(currentPage - 1)}>
            <Ionicons name="chevron-back" size={15} />
          </TouchableOpacity>
          <HStack className="justify-center items-center">
            {new Array(3).fill("_").map((pg, pgIndex) => {
              const pageIndex =
                currentPage === totalPages - 1
                  ? currentPage + pgIndex - 3
                  : currentPage + pgIndex;
              const isActivePage = pageIndex === currentPage;
              return (
                <TouchableOpacity onPress={() => setPage(pageIndex)}>
                  <Box className={`px-2 ${isActivePage ? "bg-green-500" : ""}`}>
                    <Text bold className={isActivePage ? "text-white" : ""}>
                      {pageIndex + 1}
                    </Text>
                  </Box>
                </TouchableOpacity>
              );
            })}
            <Text bold>....</Text>
            <TouchableOpacity onPress={() => setPage(totalPages)}>
              <Box
                className={`px-2 ${
                  currentPage === totalPages - 1 ? "bg-green-500" : ""
                }`}
              >
                <Text
                  bold
                  className={currentPage === totalPages - 1 ? "text-white" : ""}
                >
                  {totalPages - 1}
                </Text>
              </Box>
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Pagination;

const styles = StyleSheet.create({});
