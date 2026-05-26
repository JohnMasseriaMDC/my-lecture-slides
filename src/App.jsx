import { useState } from "react";

const CODE = ({ children }) => (
  <pre style={{
    background: "#0f172a", color: "#e2e8f0", borderRadius: 8,
    padding: "12px 16px", fontSize: 13, margin: "10px 0",
    overflowX: "auto", lineHeight: 1.6, fontFamily: "monospace",
    border: "1px solid #334155", textAlign: "left"
  }}>
    <code>{children}</code>
  </pre>
);

const Kw = ({ c = "#7dd3fc", children }) => <span style={{ color: c }}>{children}</span>;
const Cm = ({ children }) => <span style={{ color: "#64748b", fontStyle: "italic" }}>{children}</span>;
const Str = ({ children }) => <span style={{ color: "#86efac" }}>{children}</span>;
const Num = ({ children }) => <span style={{ color: "#fbbf24" }}>{children}</span>;

const Tag = ({ color = "#0ea5e9", bg = "#0c4a6e", children }) => (
  <span style={{
    background: bg, color, borderRadius: 4, padding: "2px 8px",
    fontSize: 11, fontWeight: 500, letterSpacing: 0.5
  }}>{children}</span>
);

const Bullet = ({ items }) => (
  <ul style={{ margin: "10px 0", paddingLeft: 20, lineHeight: 2 }}>
    {items.map((it, i) => <li key={i} style={{ color: "#334155", fontSize: 15 }}>{it}</li>)}
  </ul>
);

const Timer = ({ label, minutes }) => (
  <div style={{
    background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8,
    padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: 8,
    fontSize: 14, color: "#92400e", fontWeight: 500, margin: "8px 0"
  }}>
    <span>⏱</span> {label} — {minutes} min
  </div>
);

const SectionHeader = ({ block, title, sections, color = "#0ea5e9", bg = "#0c4a6e" }) => (
  <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <Tag color={color} bg={bg}>{block}</Tag>
    </div>
    <h1 style={{ fontSize: 38, fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.2 }}>{title}</h1>
    <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
      {sections.map((s, i) => (
        <div key={i} style={{
          background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: 6,
          padding: "6px 14px", fontSize: 13, color: "#475569"
        }}>{s}</div>
      ))}
    </div>
  </div>
);

const TwoCol = ({ left, right }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

const HandsOn = ({ num, exercises }) => (
  <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div style={{
        width: 48, height: 48, background: "#d1fae5", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22
      }}>💻</div>
      <div>
        <div style={{ fontSize: 12, color: "#059669", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Hands-On Activity {num}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#0f172a" }}>Try it yourself!</div>
      </div>
    </div>
    <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 8, padding: 20 }}>
      <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.2 }}>
        {exercises.map((ex, i) => (
          <li key={i} style={{ color: "#166534", fontSize: 14 }}>{ex}</li>
        ))}
      </ol>
    </div>
    <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
      <Timer label="Work time" minutes={15} />
      <div style={{
        background: "#eff6ff", border: "1px solid #93c5fd", borderRadius: 8,
        padding: "8px 16px", fontSize: 13, color: "#1e40af"
      }}>Use Python IDLE or VS Code</div>
    </div>
  </div>
);

const BreakSlide = ({ num }) => (
  <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <div style={{ fontSize: 64, marginBottom: 16 }}>☕</div>
    <h1 style={{ fontSize: 42, fontWeight: 700, color: "#0f172a", margin: 0 }}>Break Time</h1>
    <p style={{ color: "#64748b", fontSize: 18, marginTop: 8 }}>10-minute break — be back at time!</p>
    <div style={{ marginTop: 20, background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 8, padding: "10px 24px", fontSize: 16, color: "#92400e", fontWeight: 500 }}>
      ⏱ 10 minutes
    </div>
  </div>
);

const slides = [
  // 0 - Title
  {
    id: "title",
    content: () => (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          <Tag color="#38bdf8" bg="#0c4a6e">COP 1047C</Tag>
          <Tag color="#a78bfa" bg="#2e1065">Lecture 3</Tag>
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 800, color: "#0f172a", margin: "0 0 12px", lineHeight: 1.1 }}>
          Chapter 3: Python Types
        </h1>
        <p style={{ fontSize: 18, color: "#475569", margin: "0 0 32px" }}>
          Strings · Lists · Tuples · Dictionaries · Sets · Type Conversions · Binary
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            ["🕐", "4 Hours", "with hands-on labs"],
            ["📚", "zyBooks Ch. 3", "Sections 1–10"],
            ["💻", "Python 3.8+", "IDLE or VS Code"],
          ].map(([icon, label, sub], i) => (
            <div key={i} style={{
              background: "#f8fafc", border: "1px solid #e2e8f0",
              borderRadius: 10, padding: "14px 16px"
            }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontWeight: 600, color: "#0f172a", fontSize: 14 }}>{label}</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },

  // 1 - Agenda
  {
    id: "agenda",
    content: () => (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>Today's Schedule</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            ["0:00", "Opening & Review", "#0ea5e9", "#e0f2fe", "10 min"],
            ["0:10", "Block 1 — Strings (3.1, 3.10)", "#0ea5e9", "#e0f2fe", "40 min"],
            ["0:50", "Hands-On Activity 1", "#059669", "#d1fae5", "15 min"],
            ["1:05", "☕ BREAK", "#d97706", "#fef3c7", "10 min"],
            ["1:15", "Block 2 — Lists & Tuples (3.2, 3.3)", "#8b5cf6", "#ede9fe", "40 min"],
            ["1:55", "Hands-On Activity 2", "#059669", "#d1fae5", "15 min"],
            ["2:10", "☕ BREAK", "#d97706", "#fef3c7", "10 min"],
            ["2:20", "Block 3 — Dictionaries & Sets (3.4, 3.5)", "#ec4899", "#fce7f3", "30 min"],
            ["2:50", "Hands-On Activity 3", "#059669", "#d1fae5", "15 min"],
            ["3:05", "☕ BREAK", "#d97706", "#fef3c7", "10 min"],
            ["3:15", "Block 4 — Types, Conversions & Binary (3.6, 3.8, 3.9)", "#f97316", "#fff7ed", "25 min"],
            ["3:40", "Hands-On Activity 4", "#059669", "#d1fae5", "10 min"],
            ["3:50", "Wrap-Up & Q&A", "#64748b", "#f1f5f9", "10 min"],
          ].map(([time, label, color, bg, dur], i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "60px 1fr 60px",
              alignItems: "center", background: bg, borderRadius: 6,
              padding: "6px 12px", border: `1px solid ${color}20`
            }}>
              <span style={{ fontSize: 11, fontFamily: "monospace", color, fontWeight: 600 }}>{time}</span>
              <span style={{ fontSize: 13, color: "#1e293b", fontWeight: label.includes("Activity") || label.includes("BREAK") ? 500 : 400 }}>{label}</span>
              <span style={{ fontSize: 11, color, textAlign: "right" }}>{dur}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },

  // 2 - Block 1 Header
  {
    id: "b1-header",
    content: () => (
      <SectionHeader
        block="Block 1 of 4"
        title="Strings"
        sections={["3.1 String basics", "3.10 String formatting"]}
        color="#38bdf8" bg="#0c4a6e"
      />
    )
  },

  // 3 - What is a string?
  {
    id: "strings-basics",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>What is a String?</h2>
        <TwoCol
          left={
            <>
              <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, marginBottom: 12 }}>
                A <strong>string</strong> is a sequence of characters — an ordered collection with each character at a specific <strong>index</strong>, starting at <code>0</code>.
              </p>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ fontFamily: "monospace", fontSize: 13, marginBottom: 6, color: "#7c3aed" }}>"Trish"</div>
                <div style={{ display: "flex", gap: 0 }}>
                  {["T","r","i","s","h"].map((ch, i) => (
                    <div key={i} style={{ textAlign: "center", flex: 1 }}>
                      <div style={{ background: "#dbeafe", border: "1px solid #93c5fd", padding: "6px 0", fontFamily: "monospace", fontWeight: 700, fontSize: 15, color: "#1e40af" }}>{ch}</div>
                      <div style={{ fontSize: 11, color: "#64748b", padding: "2px 0" }}>{i}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Bullet items={[
                <><Kw c="#7c3aed">str1 = "Hello"</Kw> — double quotes</>,
                <><Kw c="#7c3aed">str1 = 'Hello'</Kw> — single quotes</>,
                <><Kw c="#7c3aed">str1 = ""</Kw> — empty string</>,
                <><Kw c="#7c3aed">str1 = input()</Kw> — from user</>
              ]} />
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Key Operations</div>
              <CODE>{`name = "Daniel"

# Length
print(len(name))      # 6

# Indexing
print(name[0])        # 'D'
print(name[-1])       # 'l'

# Strings are IMMUTABLE
# name[0] = "d"  ← TypeError!

# Update by reassignment
name = "daniel"`}</CODE>
              <div style={{ background: "#fef9c3", border: "1px solid #fde047", borderRadius: 6, padding: "8px 12px", fontSize: 12, color: "#713f12", marginTop: 8 }}>
                ⚠️ Strings are <strong>immutable</strong> — you cannot change individual characters. You must create a new string.
              </div>
            </>
          }
        />
      </div>
    )
  },

  // 4 - String indexing
  {
    id: "string-indexing",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>String Indexing & Concatenation</h2>
        <TwoCol
          left={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Positive & Negative Indices</div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ fontFamily: "monospace", fontSize: 13, marginBottom: 8, color: "#334155" }}>alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {[
                    ["alphabet[0]", "→ 'A'", "#0ea5e9"],
                    ["alphabet[19]", "→ 'T'", "#0ea5e9"],
                    ["alphabet[-1]", "→ 'Z'", "#8b5cf6"],
                    ["alphabet[-26]", "→ 'A'", "#8b5cf6"],
                  ].map(([code, result, col], i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 12 }}>
                      <span style={{ color: col }}>{code}</span>
                      <span style={{ color: "#64748b" }}>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#eff6ff", borderRadius: 6, padding: "8px 12px", fontSize: 12, color: "#1e40af" }}>
                💡 Negative indices count from the <strong>end</strong> of the string
              </div>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>String Concatenation</div>
              <CODE>{`first = "New"
last  = "York"

# + operator joins strings
city = first + last
# → "NewYork"

city = first + " " + last
# → "New York"

# Must convert numbers first!
# "Room " + 5  ← TypeError!
room = "Room " + str(5)
# → "Room 5"

# Building up a string
msg = "Planet: " + "Mars"
msg = msg + " | Moons: " + "2"`}</CODE>
            </>
          }
        />
      </div>
    )
  },

  // 5 - f-strings
  {
    id: "fstrings",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>String Formatting — f-strings</h2>
        <p style={{ color: "#64748b", fontSize: 13, marginBottom: 14 }}>Formatted string literals embed expressions directly in strings (Section 3.10)</p>
        <TwoCol
          left={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Basic f-strings</div>
              <CODE>{`number = 6
amount = 32

# f before the quote, {} for expressions
print(f"{number} burritos cost $\{amount}")
# → 6 burritos cost $32

name = "Joe"
print(f"Their name is {name}")
# → Their name is Joe

# Expressions inside {}
kids = 4; adults = 2
print(f"{kids + adults} total")
# → 6 total

# Debug with =
print(f"{2*4=}")   # → 2*4=8`}</CODE>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Format Specifications</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  [":d", "Integer decimal", "print(f'{4:d}')", "4"],
                  [":,d", "With commas", "print(f'{7600:,d}')", "7,600"],
                  [":03d", "Leading zeros", "print(f'{4:03d}')", "004"],
                  [":b", "Binary", "print(f'{4:b}')", "100"],
                  [":x", "Hex lower", "print(f'{31:x}')", "1f"],
                  [":f", "Fixed float", "print(f'{4:f}')", "4.000000"],
                  [":.2f", "2 decimal places", "print(f'{4:.2f}')", "4.00"],
                  [",:,.2f", "Currency-style", "print(f'{7600.1:,.2f}')", "7,600.10"],
                ].map(([spec, label, code, out], i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "50px 90px 1fr 60px",
                    gap: 6, fontSize: 11, background: "#f8fafc",
                    border: "1px solid #e2e8f0", borderRadius: 4, padding: "4px 8px", alignItems: "center"
                  }}>
                    <code style={{ color: "#7c3aed", fontWeight: 700 }}>{spec}</code>
                    <span style={{ color: "#64748b" }}>{label}</span>
                    <code style={{ color: "#0369a1", fontSize: 10 }}>{code}</code>
                    <span style={{ color: "#16a34a", fontWeight: 600 }}>{out}</span>
                  </div>
                ))}
              </div>
            </>
          }
        />
      </div>
    )
  },

  // 6 - Hands-On 1
  {
    id: "ho1",
    content: () => (
      <HandsOn num={1} exercises={[
        "Create a string variable with your full name. Print your first initial using negative indexing.",
        "Write a program that asks for a first and last name, then prints a formatted greeting: \"Hello, [First] [Last]! Your name has [N] characters.\"",
        "Using an f-string, print a receipt: item name, quantity, price per unit, and total cost formatted to 2 decimal places.",
        "CHALLENGE: Ask the user for a decimal number and display it in 3 formats: regular float, 2-decimal fixed, and as binary using f-string format spec.",
      ]} />
    )
  },

  // 7 - Break 1
  { id: "break1", content: () => <BreakSlide num={1} /> },

  // 8 - Block 2 Header
  {
    id: "b2-header",
    content: () => (
      <SectionHeader
        block="Block 2 of 4"
        title="Lists & Tuples"
        sections={["3.2 List basics", "3.3 Tuple basics"]}
        color="#a78bfa" bg="#2e1065"
      />
    )
  },

  // 9 - Lists
  {
    id: "lists",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Lists — Ordered, Mutable Containers</h2>
        <TwoCol
          left={
            <>
              <Bullet items={[
                "Created with square brackets [ ]",
                "Ordered — elements have an index starting at 0",
                "Mutable — elements can be changed",
                "Can hold mixed types",
              ]} />
              <CODE>{`# Create a list
grades = [95, 87, 92, 78]
names  = ["Ana", "Bob", "Cara"]
mixed  = [1, "hello", 3.14]
empty  = []

# Access by index
print(grades[0])    # 95
print(grades[-1])   # 78

# Update an element
grades[1] = 90      # mutable!

# Length
print(len(grades))  # 4`}</CODE>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>List Methods</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                {[
                  ["append(v)", "Add v to the end"],
                  ["pop(i)", "Remove element at index i"],
                  ["remove(v)", "Remove first occurrence of v"],
                  ["index(v)", "Find index of value v"],
                  ["count(v)", "Count occurrences of v"],
                ].map(([m, d], i) => (
                  <div key={i} style={{ display: "flex", gap: 12, fontSize: 12, background: "#f8fafc", borderRadius: 4, padding: "5px 10px", border: "1px solid #e2e8f0" }}>
                    <code style={{ color: "#7c3aed", fontWeight: 600, minWidth: 100 }}>.{m}</code>
                    <span style={{ color: "#475569" }}>{d}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 6 }}>Useful Functions</div>
              <CODE>{`nums = [4, 1, 9, 3, 7]

len(nums)    # 5
min(nums)    # 1
max(nums)    # 9
sum(nums)    # 24
sorted(nums) # [1,3,4,7,9]`}</CODE>
            </>
          }
        />
      </div>
    )
  },

  // 10 - List operations
  {
    id: "list-ops",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>List Operations in Practice</h2>
        <TwoCol
          left={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Adding & Removing</div>
              <CODE>{`prices = [1.50, 3.75, 6.00]

# append adds to end
prices.append(4.25)
# [1.50, 3.75, 6.00, 4.25]

# pop removes by index
prices.pop(1)
# [1.50, 6.00, 4.25]

# remove removes by value
prices.remove(6.00)
# [1.50, 4.25]`}</CODE>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8, marginTop: 12 }}>Concatenation</div>
              <CODE>{`jan = [32, 30, 28]
feb = [35, 38, 40]
winter = jan + feb
# [32, 30, 28, 35, 38, 40]`}</CODE>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Computing Statistics</div>
              <CODE>{`scores = [85, 92, 78, 96, 88]

total   = sum(scores)
count   = len(scores)
average = sum(scores) / len(scores)
highest = max(scores)
lowest  = min(scores)

print(f"Average: {average:.2f}")
print(f"Range:   {lowest} – {highest}")`}</CODE>
              <div style={{ background: "#eff6ff", border: "1px solid #93c5fd", borderRadius: 8, padding: "12px 14px", marginTop: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#1e40af", marginBottom: 6 }}>🏗️ Enterprise Analogy</div>
                <p style={{ fontSize: 12, color: "#1e40af", margin: 0, lineHeight: 1.7 }}>
                  In cloud architecture, a list is like an array of microservice instances — ordered, you can add or remove nodes, and you can query the whole fleet's health (min/max/avg response time).
                </p>
              </div>
            </>
          }
        />
      </div>
    )
  },

  // 11 - Tuples
  {
    id: "tuples",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Tuples — Ordered, Immutable Containers</h2>
        <p style={{ color: "#64748b", fontSize: 13, marginBottom: 14 }}>Section 3.3 — Like a list, but the data <em>cannot change</em></p>
        <TwoCol
          left={
            <>
              <Bullet items={[
                "Created with parentheses ( ) or just commas",
                "Immutable — elements cannot be modified",
                "Supports len(), indexing, iteration",
                "Use when data should stay fixed",
              ]} />
              <CODE>{`# GPS coordinates — should never change!
white_house = (38.8977, 77.0366)

print(white_house)       # (38.8977, 77.0366)
print(len(white_house))  # 2
print(white_house[0])    # 38.8977  (latitude)
print(white_house[1])    # 77.0366  (longitude)

# This would raise a TypeError:
# white_house[0] = 99  ← IMMUTABLE!`}</CODE>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Named Tuples</div>
              <p style={{ fontSize: 12, color: "#475569", marginBottom: 8 }}>Named tuples add readable attribute names — like a lightweight struct.</p>
              <CODE>{`from collections import namedtuple

# Define the structure
Car = namedtuple("Car",
    ["make","model","price","seats"])

# Create instances
blazer = Car("Chevrolet","Blazer",32000,8)
impala = Car("Chevrolet","Impala",37495,5)

# Access by name (much clearer!)
print(blazer.make)    # Chevrolet
print(blazer.price)   # 32000

# vs. index access (less clear)
print(blazer[2])      # 32000`}</CODE>
              <div style={{ background: "#fdf4ff", border: "1px solid #e879f9", borderRadius: 6, padding: "8px 12px", fontSize: 12, color: "#701a75", marginTop: 8 }}>
                💡 Choose a <strong>tuple</strong> when position matters and data is fixed. Choose a <strong>list</strong> when data needs to grow or change.
              </div>
            </>
          }
        />
      </div>
    )
  },

  // 12 - Hands-On 2
  {
    id: "ho2",
    content: () => (
      <HandsOn num={2} exercises={[
        "Create a list of 5 student names. Print the first and last names, then add a new student and remove one by value.",
        "Given a list of exam scores, compute and print the average, highest, and lowest using sum(), max(), min(), and len().",
        "Create a named tuple called Ship with fields: name, capacity, home_port, and year_built. Create 2 cruise ships and print their details using attribute names.",
        "CHALLENGE: Create two lists of monthly temperatures and concatenate them. Then calculate: overall average, the month with the highest temp, and the month with the lowest.",
      ]} />
    )
  },

  // 13 - Break 2
  { id: "break2", content: () => <BreakSlide num={2} /> },

  // 14 - Block 3 Header
  {
    id: "b3-header",
    content: () => (
      <SectionHeader
        block="Block 3 of 4"
        title="Dictionaries & Sets"
        sections={["3.5 Dictionary basics", "3.4 Set basics"]}
        color="#f472b6" bg="#500724"
      />
    )
  },

  // 15 - Dictionaries
  {
    id: "dicts",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Dictionaries — Key-Value Mapping</h2>
        <TwoCol
          left={
            <>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.8, marginBottom: 10 }}>
                A <strong>dictionary</strong> maps unique <strong>keys</strong> to <strong>values</strong> — like a real dictionary where a word maps to its definition.
              </p>
              <CODE>{`# Create with curly braces
players = {
    "Lionel Messi":     10,
    "Cristiano Ronaldo": 7
}

# Access by key (not index!)
print(players["Lionel Messi"])  # 10

# Add a new entry
players["Neymar"] = 10

# Modify an entry
players["Neymar"] = 11

# Delete an entry
del players["Neymar"]

# KeyError if key missing:
# players["Pelé"]  ← KeyError!`}</CODE>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>When to Use a Dict</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                {[
                  ["Student names → grades", "dict", "#16a34a", "#f0fdf4"],
                  ["Car models → prices", "dict", "#16a34a", "#f0fdf4"],
                  ["Port codes → ship names", "dict", "#16a34a", "#f0fdf4"],
                  ["Anonymous test scores", "list", "#2563eb", "#eff6ff"],
                  ["Ordered ranked scores", "list", "#2563eb", "#eff6ff"],
                  ["Fixed GPS coordinates", "tuple", "#7c3aed", "#fdf4ff"],
                ].map(([data, type, col, bg], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: bg, borderRadius: 5, padding: "5px 10px", fontSize: 12
                  }}>
                    <span style={{ color: "#334155" }}>{data}</span>
                    <span style={{ color: col, fontWeight: 600, fontSize: 11 }}>{type}</span>
                  </div>
                ))}
              </div>
              <CODE>{`# Practical example
prices = {"apples": 1.99, "oranges": 1.49}

# f-string access
print(f"Apples: ${prices['apples']}")`}</CODE>
            </>
          }
        />
      </div>
    )
  },

  // 16 - Sets
  {
    id: "sets",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Sets — Unordered, Unique Elements</h2>
        <TwoCol
          left={
            <>
              <Bullet items={[
                "Unordered — no index, no position",
                "Unique — no duplicate elements",
                "Mutable — can add/remove elements",
                "Great for deduplication",
              ]} />
              <CODE>{`# Create with set() or curly braces
nums = {1, 2, 3}
nums2 = set([1, 2, 2, 3, 3])  # → {1,2,3}

# Deduplicate a list!
names = ["Ana","Bob","Ana","Cara","Bob"]
unique = set(names)
# → {"Ana", "Bob", "Cara"}

# Add / Remove
unique.add("Diana")
unique.remove("Bob")   # KeyError if missing
unique.pop()           # removes random element
unique.clear()         # removes all

len(unique)            # count of elements`}</CODE>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Set Theory Operations</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                {[
                  [".union(other)", "All unique elements from both", "#0ea5e9"],
                  [".intersection(other)", "Only elements in common", "#8b5cf6"],
                  [".difference(other)", "In this set but NOT in other", "#ec4899"],
                  [".symmetric_difference(other)", "In exactly one of the two sets", "#f97316"],
                ].map(([method, desc, col], i) => (
                  <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 5, padding: "6px 10px", fontSize: 12 }}>
                    <code style={{ color: col, fontWeight: 700 }}>{method}</code>
                    <div style={{ color: "#64748b", marginTop: 2 }}>{desc}</div>
                  </div>
                ))}
              </div>
              <CODE>{`A = {"Gorgon", "Medusa"}
B = {"Gorgon", "Bert", "Tom"}

A.union(B)
# → {"Gorgon","Medusa","Bert","Tom"}

A.intersection(B)
# → {"Gorgon"}

A.difference(B)
# → {"Medusa"}`}</CODE>
            </>
          }
        />
      </div>
    )
  },

  // 17 - Hands-On 3
  {
    id: "ho3",
    content: () => (
      <HandsOn num={3} exercises={[
        "Create a dictionary mapping 5 countries to their capital cities. Print a formatted list: \"The capital of [country] is [capital].\"",
        "Build a simple inventory system: create an empty dict, add 3 items with prices, update one price, and delete one item. Print the final inventory.",
        "Given a list with duplicate values, use a set to find all unique values. Then compare two sets of students enrolled in two courses using intersection and difference.",
        "CHALLENGE: Create a port_registry dict mapping cruise ship names to a tuple of (home_port, capacity). Print all ships homeported in Miami.",
      ]} />
    )
  },

  // 18 - Break 3
  { id: "break3", content: () => <BreakSlide num={3} /> },

  // 19 - Block 4 Header
  {
    id: "b4-header",
    content: () => (
      <SectionHeader
        block="Block 4 of 4"
        title="Data Types, Conversions & Binary"
        sections={["3.6 Common data types", "3.8 Type conversions", "3.9 Binary numbers"]}
        color="#fb923c" bg="#431407"
      />
    )
  },

  // 20 - Data Types Summary
  {
    id: "types-summary",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Common Data Types — The Big Picture (Section 3.6)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            {
              cat: "Numeric", icon: "🔢", color: "#0ea5e9", bg: "#e0f2fe",
              types: [
                ["int", "Variable-width integers", "42, -7, 0"],
                ["float", "Floating-point numbers", "3.14, -0.5"],
              ]
            },
            {
              cat: "Sequence", icon: "📋", color: "#8b5cf6", bg: "#ede9fe",
              types: [
                ["str", "Text — immutable, indexed", '"Hello"'],
                ["list", "Mutable ordered container", "[1, 2, 3]"],
                ["tuple", "Immutable ordered container", "(1, 2, 3)"],
              ]
            },
            {
              cat: "Set", icon: "🔵", color: "#ec4899", bg: "#fce7f3",
              types: [
                ["set", "Mutable, unordered, unique", "{1, 2, 3}"],
              ]
            },
            {
              cat: "Mapping", icon: "🗺️", color: "#f97316", bg: "#fff7ed",
              types: [
                ["dict", "Key-value pairs", '{"a": 1}'],
              ]
            },
          ].map(({ cat, icon, color, bg, types }) => (
            <div key={cat} style={{ background: bg, border: `1px solid ${color}40`, borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 8 }}>{icon} {cat} Types</div>
              {types.map(([name, desc, ex]) => (
                <div key={name} style={{ marginBottom: 6, paddingLeft: 8, borderLeft: `2px solid ${color}60` }}>
                  <code style={{ fontSize: 12, fontWeight: 700, color }}>{name}</code>
                  <span style={{ fontSize: 11, color: "#475569", marginLeft: 8 }}>{desc}</span>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b" }}>{ex}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, background: "#f1f5f9", borderRadius: 8, padding: "10px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 6 }}>Quick Choosing Guide</div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              ["Ordered + changeable data", "list"],
              ["Fixed data / coordinates", "tuple"],
              ["Relationships / lookups", "dict"],
              ["Unique values only", "set"],
            ].map(([q, a]) => (
              <div key={q} style={{ fontSize: 12, color: "#475569" }}>
                {q} → <strong style={{ color: "#0f172a" }}>{a}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },

  // 21 - Type Conversions
  {
    id: "conversions",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Type Conversions (Section 3.8)</h2>
        <TwoCol
          left={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Implicit Conversions (automatic)</div>
              <CODE>{`# Python promotes to float automatically
1 + 2      # → int: 3
1 + 2.0    # → float: 3.0
1.0 + 2.0  # → float: 3.0

# float → int drops the fraction
# 4.9 becomes 4`}</CODE>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", margin: "12px 0 8px" }}>Explicit Conversion Functions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  ["int(x)", "→ integer (truncates float)", "#0ea5e9"],
                  ["float(x)", "→ floating-point", "#8b5cf6"],
                  ["str(x)", "→ string (any type)", "#ec4899"],
                ].map(([fn, desc, col]) => (
                  <div key={fn} style={{ background: "#f8fafc", borderRadius: 5, padding: "5px 10px", fontSize: 12, border: "1px solid #e2e8f0" }}>
                    <code style={{ color: col, fontWeight: 700 }}>{fn}</code>
                    <span style={{ color: "#64748b", marginLeft: 8 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Conversion in Practice</div>
              <CODE>{`# All user input() is a STRING!
user_input = input("Enter a number: ")
# "18.75"  ← this is a string, not a number

# Convert to work with math
as_float = float(user_input)  # 18.75
as_int   = int(as_float)      # 18

# String to number
int("500")     # → 500
float("1.75")  # → 1.75

# Number to string (for concatenation)
room = "Room " + str(42)   # "Room 42"

# COMMON PITFALL:
num_pounds = float(input("Weight: "))
int_pounds = int(num_pounds)  # truncates`}</CODE>
              <div style={{ background: "#fef9c3", border: "1px solid #fde047", borderRadius: 6, padding: "8px 12px", fontSize: 12, color: "#713f12", marginTop: 8 }}>
                ⚠️ <strong>Key rule:</strong> <code>input()</code> always returns a <strong>string</strong>. Always convert before doing math!
              </div>
            </>
          }
        />
      </div>
    )
  },

  // 22 - Binary Numbers
  {
    id: "binary",
    content: () => (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Binary Numbers (Section 3.9)</h2>
        <TwoCol
          left={
            <>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.8, marginBottom: 10 }}>
                Computers store numbers in <strong>base 2</strong> (binary) using only 0s and 1s. Each digit's place is a power of 2.
              </p>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 12, color: "#475569", marginBottom: 8 }}>Example: 1101₂ = ?</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 4, textAlign: "center" }}>
                  {[["1","2³ = 8"],["1","2² = 4"],["0","2¹ = 2"],["1","2⁰ = 1"]].map(([bit, place], i) => (
                    <div key={i} style={{ background: bit === "1" ? "#dbeafe" : "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: 4, padding: "6px 4px" }}>
                      <div style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: bit === "1" ? "#1e40af" : "#94a3b8" }}>{bit}</div>
                      <div style={{ fontSize: 10, color: "#64748b" }}>{place}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 8, fontSize: 12, color: "#334155", textAlign: "center" }}>
                  8 + 4 + 0 + 1 = <strong style={{ color: "#1e40af" }}>13</strong>
                </div>
              </div>
              <Bullet items={[
                "8 bits = 1 byte, max unsigned value = 255",
                "With N bits: 2ᴺ possible values",
              ]} />
            </>
          }
          right={
            <>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Conversion Practice</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
                {[
                  ["00001111₂", "→", "15", "1+2+4+8"],
                  ["10001000₂", "→", "136", "8+128"],
                  ["17₁₀", "→", "00010001₂", "16+1"],
                  ["51₁₀", "→", "00110011₂", "32+16+2+1"],
                ].map(([from, arrow, to, note], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "110px 20px 110px 1fr", gap: 6, background: "#f8fafc", borderRadius: 4, padding: "5px 10px", fontSize: 12, alignItems: "center", border: "1px solid #e2e8f0" }}>
                    <code style={{ color: "#7c3aed" }}>{from}</code>
                    <span style={{ color: "#94a3b8", textAlign: "center" }}>{arrow}</span>
                    <code style={{ color: "#0ea5e9", fontWeight: 700 }}>{to}</code>
                    <span style={{ color: "#94a3b8" }}>{note}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 8 }}>Python Binary Shortcuts</div>
              <CODE>{`# f-string format spec :b
num = 13
print(f"{num:b}")    # → 1101
print(f"{13:08b}")   # → 00001101

# Hexadecimal
print(f"{255:x}")    # → ff
print(f"{255:X}")    # → FF`}</CODE>
            </>
          }
        />
      </div>
    )
  },

  // 23 - Hands-On 4
  {
    id: "ho4",
    content: () => (
      <HandsOn num={4} exercises={[
        "Write a program that accepts weight in lbs as a float, converts to int (truncated), and displays both values using an f-string.",
        "Given a list of string numbers [\"10\", \"25\", \"7\", \"88\"], convert each to int, compute the sum, and display the result.",
        "Write a program that accepts a decimal number and displays it in binary, hexadecimal, and with leading zeros (8-bit) using f-string format specs.",
        "CHALLENGE: Create a type-checking calculator — ask user for two inputs, convert to float, perform +/−/×/÷, and display results to 2 decimal places.",
      ]} />
    )
  },

  // 24 - Wrap-up
  {
    id: "wrapup",
    content: () => (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>Chapter 3 — What We Covered</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {[
            ["3.1 + 3.10", "Strings", "Indexing, concatenation, f-strings, format specs", "#0ea5e9", "#e0f2fe"],
            ["3.2", "Lists", "Creation, access, mutability, methods, functions", "#8b5cf6", "#ede9fe"],
            ["3.3", "Tuples", "Immutability, named tuples, when to use", "#8b5cf6", "#ede9fe"],
            ["3.5", "Dictionaries", "Key-value pairs, CRUD operations, use cases", "#ec4899", "#fce7f3"],
            ["3.4", "Sets", "Unordered unique elements, set theory ops", "#ec4899", "#fce7f3"],
            ["3.6", "Type Summary", "Choosing the right container", "#f97316", "#fff7ed"],
            ["3.8", "Conversions", "int(), float(), str(), input() gotcha", "#f97316", "#fff7ed"],
            ["3.9", "Binary", "Base 2 representation, power-of-2 weights", "#f97316", "#fff7ed"],
          ].map(([sec, name, desc, col, bg]) => (
            <div key={sec} style={{ background: bg, border: `1px solid ${col}30`, borderRadius: 8, padding: "10px 14px" }}>
              <div style={{ fontSize: 11, color: col, fontWeight: 600, marginBottom: 2 }}>§ {sec}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#0f172a" }}>{name}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#f1f5f9", borderRadius: 8, padding: "12px 16px" }}>
          <div style={{ fontWeight: 600, color: "#334155", fontSize: 13, marginBottom: 6 }}>📚 What's Next — Due 6/17</div>
          <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#475569", flexWrap: "wrap" }}>
            <span>✅ zyBook Ch. 3 Readings</span>
            <span>✅ zyBook Ch. 2 Readings + Labs</span>
            <span>📌 Ch. 4 Branching begins next week</span>
          </div>
        </div>
      </div>
    )
  },
];

export default function LectureSlides() {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];
  const isBreak = slide.id.startsWith("break");
  const isHandsOn = slide.id.startsWith("ho");
  const isHeader = slide.id.endsWith("-header");
  const isTitle = slide.id === "title";

  const headerBg = isBreak ? "#fef3c7" : isHandsOn ? "#f0fdf4" : isHeader ? "#0f172a" : "#ffffff";
  const contentBg = isBreak ? "#fef3c7" : isHandsOn ? "#f0fdf4" : "#ffffff";
  const borderColor = isBreak ? "#f59e0b" : isHandsOn ? "#86efac" : "#e2e8f0";

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "0 0 16px" }}>
      <div style={{
        background: "#0f172a", color: "#e2e8f0",
        padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center",
        borderRadius: "8px 8px 0 0"
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>
          COP 1047C — Lecture 3 · Chapter 3: Python Types
        </div>
        <div style={{ fontSize: 11, color: "#64748b" }}>
          {current + 1} / {slides.length}
        </div>
      </div>

      <div style={{
        border: `1px solid ${borderColor}`, borderTop: "none",
        borderRadius: "0 0 8px 8px", background: contentBg,
        minHeight: 420, padding: "24px 28px",
        display: "flex", flexDirection: "column"
      }}>
        <div style={{ flex: 1 }}>
          {slide.content()}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, padding: "0 4px" }}>
        <button
          onClick={prev}
          disabled={current === 0}
          style={{
            background: "none", border: "1px solid #cbd5e1", borderRadius: 6,
            padding: "6px 16px", cursor: current === 0 ? "not-allowed" : "pointer",
            color: current === 0 ? "#cbd5e1" : "#334155", fontSize: 13,
            display: "flex", alignItems: "center", gap: 6
          }}
        >
          ← Previous
        </button>

        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", maxWidth: 420, justifyContent: "center" }}>
          {slides.map((s, i) => {
            const isBreakDot = s.id.startsWith("break");
            const isHoDot = s.id.startsWith("ho");
            const isHeaderDot = s.id.endsWith("-header") || s.id === "title" || s.id === "wrapup";
            const dotColor = isBreakDot ? "#f59e0b" : isHoDot ? "#16a34a" : isHeaderDot ? "#0f172a" : "#cbd5e1";
            return (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                title={s.id}
                style={{
                  width: i === current ? 16 : 8, height: 8,
                  borderRadius: 4, background: i === current ? "#0ea5e9" : dotColor,
                  cursor: "pointer", transition: "all 0.2s"
                }}
              />
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          style={{
            background: current === slides.length - 1 ? "none" : "#0ea5e9",
            border: "1px solid " + (current === slides.length - 1 ? "#cbd5e1" : "#0ea5e9"),
            borderRadius: 6, padding: "6px 16px",
            cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
            color: current === slides.length - 1 ? "#cbd5e1" : "#fff", fontSize: 13,
            display: "flex", alignItems: "center", gap: 6
          }}
        >
          Next →
        </button>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10, padding: "0 4px" }}>
        {[
          ["Title", 0], ["Agenda", 1], ["Strings", 2],
          ["Lists & Tuples", 8], ["Dicts & Sets", 14], ["Types & Binary", 19], ["Wrap-Up", 24]
        ].map(([label, idx]) => (
          <button key={label} onClick={() => setCurrent(idx)} style={{
            background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 4,
            padding: "3px 10px", fontSize: 11, color: "#475569", cursor: "pointer"
          }}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
