#include <iostream>

using namespace std;
int main()
{
    int A, B, T;
    int C =0;

    cin >> T;

    for(int i=1;i<=T;i++)
    {
        cin >> A >> B;
        C = A+B;
        cout << "Case #" << i << ": "<< A << " + " << B << " = " << C << endl;
    }

    return 0;
}