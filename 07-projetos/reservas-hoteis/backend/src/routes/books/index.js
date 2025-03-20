import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBooks = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: req.user.id,
      },
      select: {
        id: true,
        name: true,
        people: true,
        checkIn: true,
        checkOut: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { name, people, checkIn, checkOut } = req.body;
    const booking = await prisma.booking.create({
      data: {
        name,
        people,
        checkIn,
        checkOut,
        userId: req.user.id,
      },
    });
    res.json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
