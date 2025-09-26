// src/Pages/Mentor/Create.jsx
import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Checkbox,
  ActionIcon,
  ScrollArea,
  Title,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const Create = () => {
  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(60);
  const [isFull, setIsFull] = useState(false);

  const addSlot = () => {
    if (!date || !time) {
      alert("Please select both date and time");
      return;
    }
    if (duration < 60) {
      alert("Duration must be at least 1 hour");
      return;
    }

    const slotDate = new Date(`${date}T${time}`);

    const newSlot = {
      id: Date.now(),
      date: slotDate,
      duration,
      isFull,
    };

    setSlots([...slots, newSlot]);
    setDate("");
    setTime("");
    setDuration(60);
    setIsFull(false);
  };

  const rescheduleSlot = (id) => {
    const slot = slots.find((s) => s.id === id);
    if (!slot) return;

    const newDate = prompt("Enter new date (YYYY-MM-DD):", slot.date.toISOString().slice(0,10));
    const newTime = prompt("Enter new time (HH:mm):", slot.date.toTimeString().slice(0,5));
    if (newDate && newTime) {
      const updatedDate = new Date(`${newDate}T${newTime}`);
      setSlots(slots.map((s) => (s.id === id ? { ...s, date: updatedDate } : s)));
    }
  };

  const deleteSlot = (id) => {
    setSlots(slots.filter((s) => s.id !== id));
  };

  return (
    <Stack p="md" spacing="xl">
      <Title order={2}>Create Mentor Slots</Title>

      {/* Form */}
      <Card withBorder shadow="sm" p="lg">
        <Grid gutter="md" align="flex-end">
          <Grid.Col xs={12} sm={4}>
            <TextInput
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Grid.Col>

          <Grid.Col xs={12} sm={4}>
            <TextInput
              label="Time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </Grid.Col>

          <Grid.Col xs={12} sm={2}>
            <TextInput
              label="Duration (min)"
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              required
              min={60}
            />
          </Grid.Col>

          <Grid.Col xs={12} sm={2}>
            <Checkbox
              label="Full"
              checked={isFull}
              onChange={(e) => setIsFull(e.currentTarget.checked)}
            />
          </Grid.Col>

          <Grid.Col xs={12}>
            <Button fullWidth onClick={addSlot}>
              Add Slot
            </Button>
          </Grid.Col>
        </Grid>
      </Card>

      {/* Slots List */}
      <ScrollArea style={{ maxHeight: 400 }}>
        <Stack spacing="sm">
          {slots.length === 0 ? (
            <Text c="dimmed">No slots created yet.</Text>
          ) : (
            slots.map((slot) => (
              <Card key={slot.id} withBorder shadow="xs" p="md">
                <Grid align="center">
                  <Grid.Col xs={12} sm={4}>
                    <Text fw={500}>
                      {slot.date.toLocaleDateString()} {slot.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </Text>
                  </Grid.Col>

                  <Grid.Col xs={6} sm={3}>
                    <Text size="sm">Duration: {slot.duration} min</Text>
                  </Grid.Col>

                  <Grid.Col xs={6} sm={3}>
                    <Text size="sm" c={slot.isFull ? "red" : "green"}>
                      {slot.isFull ? "Full" : "Available"}
                    </Text>
                  </Grid.Col>

                  <Grid.Col xs={12} sm={2}>
                    <Group spacing="xs" position="right">
                      <ActionIcon color="blue" onClick={() => rescheduleSlot(slot.id)}>
                        <IconEdit size={18} />
                      </ActionIcon>
                      <ActionIcon color="red" onClick={() => deleteSlot(slot.id)}>
                        <IconTrash size={18} />
                      </ActionIcon>
                    </Group>
                  </Grid.Col>
                </Grid>
              </Card>
            ))
          )}
        </Stack>
      </ScrollArea>
    </Stack>
  );
};

export default Create;
