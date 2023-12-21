"use client";
import {
  Container,
  Divider,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
} from "@mantine/core";
import StatsRing from "components/UI/App/StatsRing/StatsRing";

const PRIMARY_COL_HEIGHT = rem(500);

export default function page() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <>
      <Container my={"md"} miw={"100%"}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
        <div>
          <Divider my={"xl"} />
          <StatsRing />
        </div>
      </Container>
    </>
  );
}
