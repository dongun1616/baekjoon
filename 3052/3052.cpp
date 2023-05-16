#include <iostream>

using namespace std;
int main()
{
    int C;
    int A[42] = {0};
    int count = 0;

    for(int a=1;a<=10;a++)
    {
        cin >> C;
        A[C % 42]++;
    }
    for(int a=0;a<42;a++)
    {
        if(A[a] != 0)
        {
            count++;
        }
    }    
    cout << count << endl;

    return 0;
}