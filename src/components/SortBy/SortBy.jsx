import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

const SortBy = ({ sort, setSort }) => {
  return (
    <div className="sort-by">
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{ margin: "0rem 1rem", fontWeight: "600", fontSize: "1rem" }}
        >
          Sort By
        </div>
        <TabContext value={sort}>
          <Box sx={{ borderBottom: 1, borderColor: "white" }}>
            <TabList
              onChange={(event, newValue) => setSort(newValue)}
              aria-label="sort by tabs"
            >
              <Tab label="Popularity" value="popularity" />
              <Tab label="Low to High" value="lowtoHigh" />
              <Tab label="High to Low" value="highToLow" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
};

export default SortBy;
